import {
  IonPage,
  IonLabel,
  IonContent,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonIcon,
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { Home, Profile, ProductDetail, AddFood, UpdateProfile } from '../..';

import { home, person } from 'ionicons/icons';

export function Main() {
  return (
    <IonPage>
      <IonContent>
        <IonReactRouter>
          <IonTabs>
            {' '}
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route
                exact
                path="/product-detail/:id"
                children={<ProductDetail />}
              />
              <Route exact path="/add-food" children={<AddFood />} />
              <Route
                exact
                path="/update-profile"
                children={<UpdateProfile />}
              />
              <Route exact path="/main">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="personal" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="official" href="/profile">
                <IonIcon icon={person} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
}

export default Main;
