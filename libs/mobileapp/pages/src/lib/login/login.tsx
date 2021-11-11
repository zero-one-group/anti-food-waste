import { TextFieldTypes } from '@ionic/core';
import {
  IonPage,
  IonRow,
  IonItem,
  IonInput,
  IonButton,
  IonContent,
  IonGrid,
  IonCol,
  IonAlert,
  IonCard,
  IonList,
  IonIcon,
  IonText,
  IonRouterLink,
} from '@ionic/react';

import groceries from '/assets/images/groceries.svg';

import {
  eyeOffOutline,
  eyeOutline,
  lockClosedOutline,
  mailOutline,
} from 'ionicons/icons';

import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [passwordType, setPasswordType] = useState<TextFieldTypes>('password');

  const togglePasswordVisible = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };
  return (
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
              <b>Bantu</b> <span className="text-italic">Anti Food Waste</span>{' '}
              <b>kurangi limbah makanan</b>
            </h1>
          </IonCol>

          <IonCol size="12" className="ion-margin-top">
            <img src={groceries} alt="groceries" width="300px" />
          </IonCol>
        </IonRow>

        <IonCard className="login-card">
          <form noValidate>
            <IonList className="transparent">
              <IonItem className="input-rounded" lines="none">
                <IonIcon icon={mailOutline}></IonIcon>
                <IonInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  spellCheck={false}
                  autocapitalize="off"
                  color="dark"
                  onIonChange={(e) => setEmail(e.detail.value ?? '')}
                  required
                />
              </IonItem>
              <IonItem className="input-rounded" lines="none">
                <IonIcon icon={lockClosedOutline}></IonIcon>
                <IonInput
                  name="password"
                  type={passwordType}
                  placeholder="Kata Sandi"
                  value={password}
                  clearOnEdit={false}
                  color="dark"
                  onIonChange={(e) => setPassword(e.detail.value ?? '')}
                ></IonInput>
                {passwordType === 'password' ? (
                  <IonIcon icon={eyeOutline} onClick={togglePasswordVisible} />
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
                <IonButton expand="block" href="/main" mode="md">
                  Masuk
                </IonButton>
              </IonCol>
              <IonCol size="12">
                <IonText>Belum punya akun?</IonText>{' '}
                <IonRouterLink href="/signup">Buat akun</IonRouterLink>
              </IonCol>
            </IonRow>
          </form>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Login;
