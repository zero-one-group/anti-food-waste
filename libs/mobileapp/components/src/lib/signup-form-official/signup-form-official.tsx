import {
  IonPage,
  IonRow,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonContent,
  IonCol,
  IonList,
} from '@ionic/react';

export function SignupFormOfficial() {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonRow className="ion-margin">
          <IonCol size="12" className="ion-text-center">
            <b className="ion-no-margin">Buat akun resmi</b>
          </IonCol>
        </IonRow>
        <form noValidate>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Nama perusahaan</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Alamat</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Konfirmasi password</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
          </IonList>
          <IonCol>
            <IonButton expand="block" mode="md">
              Buat akun
            </IonButton>
          </IonCol>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default SignupFormOfficial;
