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

export function Signup() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Sign Up</IonTitle>
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
                <IonLabel>Personal Account</IonLabel>
              </IonTabButton>
              <IonTabButton tab="official" href="/official">
                <IonLabel>Official Account</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
}

export default Signup;
