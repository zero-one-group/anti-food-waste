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
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
  SignupFormPersonal,
  SignupFormOfficial,
} from '@anti-food-waste/mobileapp/components';
import { arrowBack } from 'ionicons/icons';

export function Signup() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/personal">
                <SignupFormPersonal />
              </Route>
              <Route exact path="/official">
                <SignupFormOfficial />
              </Route>
              <Route exact path="/signup">
                <Redirect to="/personal" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="top">
              <IonTabButton tab="personal" href="/personal">
                <IonLabel>Akun personal</IonLabel>
              </IonTabButton>
              <IonTabButton tab="official" href="/official">
                <IonLabel>Akun resmi</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
}

export default Signup;
