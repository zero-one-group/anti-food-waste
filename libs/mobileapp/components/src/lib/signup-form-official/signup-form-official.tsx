import {
  IonPage,
  IonRow,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonContent,
  IonGrid,
  IonCol,
} from '@ionic/react';

export function SignupFormOfficial() {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow style={{ marginTop: '20px' }}>
            <b style={{ margin: 'auto' }}>Sign up for offcial account</b>
          </IonRow>
          <IonRow style={{ marginTop: '20px' }}>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Company name</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Address</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Password Confirmation</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow style={{ marginTop: '60px' }}>
            <IonCol>
              <IonButton expand="block">Sign Up</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default SignupFormOfficial;
