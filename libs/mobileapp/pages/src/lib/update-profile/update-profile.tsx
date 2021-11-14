import {
  IonPage,
  IonLabel,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonList,
  IonText,
  IonSelect,
  IonSelectOption,
  IonAvatar,
} from '@ionic/react';

import { arrowBack, imageOutline } from 'ionicons/icons';

export function UpdateProfile() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">Ubah profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center profile">
        <IonRow className="ion-margin">
          <IonCol size="12" className="ion-text-center">
            <b>Ubah profil</b>
          </IonCol>
        </IonRow>
        <form noValidate>
          <IonRow>
            <IonCol>
              <IonAvatar>
                <img
                  src="https://sekolahutsman.sch.id/wp-content/uploads/2016/03/no-profile.png"
                  alt="profile"
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonText
            onClick={() => console.log('add profile')}
            className="button-update-profile-photo text-small-2"
          >
            Ubah foto profil
          </IonText>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Nama</IonLabel>
              <IonInput type="text" value="jojo"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Alamat</IonLabel>
              <IonInput type="text" value="Surabaya"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value="adadeg@gmail.com"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" value="rahasia"></IonInput>
            </IonItem>
          </IonList>
          <IonCol>
            <IonButton expand="block" mode="md">
              Ubah profil
            </IonButton>
          </IonCol>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default UpdateProfile;
