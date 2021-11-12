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
} from '@ionic/react';
import { arrowBack, imageOutline } from 'ionicons/icons';

export function AddFood() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">
            Tambah makanan
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonRow className="ion-margin">
          <IonCol size="12" className="ion-text-center">
            <b>Bagikan makanan dan selamatkan dunia</b>
          </IonCol>
        </IonRow>
        <form noValidate>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Nama makanan</IonLabel>
              <IonInput type="text" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Pick up times</IonLabel>
              <IonInput
                type="text"
                placeholder="e.g. makanan bisa diambil pada saat jam 6 malam"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Lokasi</IonLabel>
              <IonInput
                type="text"
                placeholder="e.g. Sidoarjo, Gedangan"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Deskripsi</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Harga</IonLabel>
              <IonInput type="number" placeholder="e.g. 0"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Kategori</IonLabel>
              <IonSelect>
                <IonSelectOption value="Siap saji">Siap saji</IonSelectOption>
                <IonSelectOption value="Bahan">Bahan</IonSelectOption>
                <IonSelectOption value="Umbi">Umbi</IonSelectOption>
                <IonSelectOption value="Buah">Buah</IonSelectOption>
                <IonSelectOption value="Minuman">Minuman</IonSelectOption>
                <IonSelectOption value="Kalengan">Kalengan</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton
              color="light"
              expand="block"
              className="ion-margin-bottom ion-margin-top upload-button"
            >
              <IonIcon icon={imageOutline} />
              <IonText>Upload</IonText>
            </IonButton>

            <IonButton
              expand="block"
              className="ion-margin-bottom ion-margin-top"
            >
              <IonText>Add new food</IonText>
            </IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default AddFood;
