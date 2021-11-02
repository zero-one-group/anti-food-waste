import {
  IonPage,
  IonLabel,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRow,
  IonButtons,
  IonBackButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonIcon,
  IonGrid,
  IonRouterLink,
  IonFab,
  IonFabButton,
} from '@ionic/react';

import { add } from 'ionicons/icons';

export function Home() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow className="ion-justify-content-between">
            <b>From our official partner</b>
            <IonRouterLink href="#">see all</IonRouterLink>
          </IonRow>

          <IonRow
            className="ion-justify-content-between"
            style={{ marginTop: '20px' }}
          >
            <b>From your neighbors</b>
            <IonRouterLink href="#">see all</IonRouterLink>
          </IonRow>
        </IonGrid>
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          style={{ paddingBottom: '20px', paddingRight: '10px' }}
        >
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}

export default Home;
