import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonContent,
  IonGrid,
  IonAlert,
} from '@ionic/react';

import { useState } from 'react';

import { personCircle } from 'ionicons/icons';

export function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
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
          <IonRow style={{ marginBottom: '10px' }}>
            <IonCol>
              <h1 style={{ fontSize: '45px' }}>
                <b>Bantu</b>{' '}
                <span style={{ fontStyle: 'italic' }}>Anti Food Waste</span>{' '}
                <b>kurangi limbah makanan</b>
              </h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow style={{ marginTop: '60px' }}>
            <IonCol>
              <IonButton expand="block">Sign In</IonButton>
              <p style={{ fontSize: 'medium' }}>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Login;
