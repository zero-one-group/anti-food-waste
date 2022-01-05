import { TextFieldTypes } from '@ionic/core';
import {
  IonPage,
  IonRow,
  IonItem,
  IonInput,
  IonButton,
  IonContent,
  IonCol,
  IonAlert,
  IonCard,
  IonList,
  IonIcon,
  IonText,
  IonRouterLink,
} from '@ionic/react';

import { useHistory } from 'react-router-dom';

import { Form, Formik } from 'formik';

import axios from 'axios';

import groceries from '/assets/images/groceries.svg';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UserContext, defaultUser } from '@anti-food-waste/mobileapp/context';

import {
  eyeOffOutline,
  eyeOutline,
  lockClosedOutline,
  mailOutline,
} from 'ionicons/icons';

import { useState, useEffect } from 'react';

export interface DataProps {
  [key: string]:
    | string
    | number
    | boolean
    | { [key: string]: string | number }[];
}

export function Login() {
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [passwordType, setPasswordType] = useState<TextFieldTypes>('password');
  const [user, setUser] = useState(defaultUser);
  const history = useHistory();
  const defaultValues = {
    userEmail: '',
    userPassword: '',
  };
  const [state, setState] = useState(defaultValues);

  const togglePasswordVisible = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  const checkUser = (values: any) => {
    axios
      .post('http://localhost:8080/login', {
        userEmail: values.userEmail,
        userPassword: values.userPassword,
      })
      .then((response) => {
        const data = response.data;
        setUser(data.user);
      })
      .catch(() => {
        setMessage('email atau password salah');
        setIserror(true);
      });
  };

  useEffect(() => {
    if (user.userEmail) {
      history.push('/home');
      window.localStorage.setItem('user', JSON.stringify(user));
    }
  }, [history, user]);

  const handleSubmit = (values: DataProps, actions: any) => {
    checkUser(values);
    actions.setSubmitting(false);
  };

  return (
    <UserContext.Provider value={user}>
      <IonPage>
        <IonContent fullscreen className="ion-text-center">
          <IonRow className="ion-text-center login-page">
            <IonCol>
              <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={'Error!'}
                message={message}
                buttons={['Dismiss']}
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding">
            <IonCol>
              <h1 className="text-large-2">
                <b>Bantu</b>{' '}
                <span className="text-italic">Anti Food Waste</span>{' '}
                <b>kurangi limbah makanan</b>
              </h1>
            </IonCol>

            <IonCol size="12" className="ion-margin-top">
              <img src={groceries} alt="groceries" width="300px" />
            </IonCol>
          </IonRow>

          <IonCard className="login-card">
            <Formik initialValues={state} onSubmit={handleSubmit}>
              {(formikProps) => {
                return (
                  <Form id="login">
                    <IonList className="transparent">
                      <IonItem className="input-rounded" lines="none">
                        <IonIcon icon={mailOutline}></IonIcon>
                        <IonInput
                          name="userEmail"
                          type="email"
                          placeholder="Email"
                          value={formikProps.values.userEmail}
                          spellCheck={false}
                          autocapitalize="off"
                          color="dark"
                          onIonChange={formikProps.handleChange}
                          required
                        />
                      </IonItem>
                      <IonItem className="input-rounded" lines="none">
                        <IonIcon icon={lockClosedOutline}></IonIcon>
                        <IonInput
                          name="userPassword"
                          type={passwordType}
                          placeholder="Kata Sandi"
                          value={formikProps.values.userPassword}
                          clearOnEdit={false}
                          color="dark"
                          onIonChange={formikProps.handleChange}
                        ></IonInput>
                        {passwordType === 'password' ? (
                          <IonIcon
                            icon={eyeOutline}
                            onClick={togglePasswordVisible}
                          />
                        ) : (
                          <IonIcon
                            icon={eyeOffOutline}
                            onClick={togglePasswordVisible}
                          />
                        )}
                      </IonItem>
                    </IonList>
                    <IonRow>
                      <IonCol size="12">
                        <IonButton
                          expand="block"
                          href="/main"
                          mode="md"
                          type="submit"
                        >
                          Masuk
                        </IonButton>
                      </IonCol>
                      <IonCol size="12">
                        <IonText>Belum punya akun?</IonText>{' '}
                        <IonRouterLink href="/signup">Buat akun</IonRouterLink>
                      </IonCol>
                    </IonRow>
                  </Form>
                );
              }}
            </Formik>
          </IonCard>
        </IonContent>
      </IonPage>
    </UserContext.Provider>
  );
}

export default Login;
