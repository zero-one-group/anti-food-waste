import {
  IonPage,
  IonLabel,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonGrid,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { imageOutline } from 'ionicons/icons';

export function AddFood() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Add Food</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <b style={{ margin: 'auto' }}>
              Share food with others and save the world
            </b>
          </IonRow>
          <IonRow style={{ marginTop: '20px' }}>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
              <IonItem style={{ marginTop: '10px' }}>
                <IonLabel position="stacked">Pick up times</IonLabel>
                <IonInput
                  type="text"
                  placeholder="e.g. makanan bisa diambil pada saat jam 6 malam"
                ></IonInput>
              </IonItem>
              <IonItem style={{ marginTop: '10px' }}>
                <IonLabel position="stacked">Location</IonLabel>
                <IonInput
                  type="text"
                  placeholder="e.g. Sidoarjo, Gedangan"
                ></IonInput>
              </IonItem>
              <IonItem style={{ marginTop: '10px' }}>
                <IonLabel position="stacked">Description</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
              <IonItem style={{ marginTop: '10px' }}>
                <IonLabel position="stacked">Price</IonLabel>
                <IonInput type="number" placeholder="e.g. 1000"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonButton color="light" expand="block" style={{ marginTop: '20px' }}>
            <IonIcon icon={imageOutline} style={{ marginRight: '5px' }} />
            Upload
          </IonButton>
        </IonGrid>

        <IonButton expand="block" style={{ marginTop: '40px' }}>
          Add new food
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

export default AddFood;
