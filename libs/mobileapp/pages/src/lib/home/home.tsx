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
  IonSlides,
  IonSlide,
  IonList,
} from '@ionic/react';

import { add } from 'ionicons/icons';
import { CardProduct } from '@anti-food-waste/mobileapp/components';

export function Home() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-between">
            <b>From our official partner</b>
            <IonRouterLink href="#">see all</IonRouterLink>
          </IonRow>
          <IonSlides
            id="slider"
            options={{ slidesPerView: '1.4', zoom: true, grabCursor: true }}
            className={`ion-padding-bottom`}
          >
            <IonSlide>
              <CardProduct
                productName="Wortel"
                productImage="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                productLocation="Surabaya"
                productPrice={10000}
                productSeller="Depot Jaya"
              />
            </IonSlide>
            <IonSlide>
              <CardProduct
                productName="Wortel"
                productImage="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                productLocation="Surabaya"
                productPrice={10000}
                productSeller="Depot Jaya"
              />
            </IonSlide>
            <IonSlide>
              <CardProduct
                productName="Wortel"
                productImage="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                productLocation="Surabaya"
                productPrice={10000}
                productSeller="Depot Jaya"
              />
            </IonSlide>
          </IonSlides>

          <IonRow
            className="ion-justify-content-between"
            style={{ marginTop: '20px' }}
          >
            <b>From your neighbors</b>
          </IonRow>
          <IonList>
            <IonRow>
              <CardProduct
                productName="Wortel"
                productImage="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                productLocation="Surabaya"
                productPrice={10000}
                productSeller="Depot Jaya"
              />
              <CardProduct
                productName="Wortel"
                productImage="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                productLocation="Surabaya"
                productPrice={10000}
                productSeller="Depot Jaya"
              />
              <CardProduct
                productName="Wortel"
                productImage="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                productLocation="Surabaya"
                productPrice={10000}
                productSeller="Depot Jaya"
              />
              <CardProduct
                productName="Wortel"
                productImage="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                productLocation="Surabaya"
                productPrice={10000}
                productSeller="Depot Jaya"
              />
              <CardProduct
                productName="Wortel"
                productImage="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                productLocation="Surabaya"
                productPrice={10000}
                productSeller="Depot Jaya"
              />
            </IonRow>
          </IonList>
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
