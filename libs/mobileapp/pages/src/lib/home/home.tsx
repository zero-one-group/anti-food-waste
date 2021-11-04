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
  IonCol,
} from '@ionic/react';

import { add } from 'ionicons/icons';
import { CardProduct } from '@anti-food-waste/mobileapp/components';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  getProductFromOfficial,
  getProductFromNeighbor,
} from '@anti-food-waste/mobileapp/data-access';
import { useEffect, useState } from 'react';

type productProps = {
  id: number;
  productName: string;
  productImage: string;
  productLocation: string;
  productPrice: number;
  productSeller: string;
};

export function Home() {
  const [productFromNeighbor, setProductFromNeighbor] = useState<
    productProps[]
  >([]);
  const [productFromOfficial, setProductFromOfficial] = useState<
    productProps[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const productNeighbor = await getProductFromNeighbor();
      const productOfficial = await getProductFromOfficial();
      setProductFromNeighbor(productNeighbor);
      setProductFromOfficial(productOfficial);
    }
    fetchData();
  }, []);
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
            options={{ slidesPerView: '1.4', grabCursor: true }}
            className={`ion-padding-bottom`}
          >
            {productFromOfficial.map((v, i) => (
              <IonSlide key={i}>
                <CardProduct
                  productName={v.productName}
                  productImage={v.productImage}
                  productLocation={v.productLocation}
                  productPrice={v.productPrice}
                  productSeller={v.productSeller}
                  productId={v.id}
                  padding="4"
                />
              </IonSlide>
            ))}
          </IonSlides>

          <IonRow
            className="ion-justify-content-between"
            style={{ marginTop: '20px' }}
          >
            <b>From your neighbors</b>
          </IonRow>
          <IonList>
            <IonRow>
              {productFromNeighbor.map((v, i) => (
                <IonCol size="6" key={i}>
                  <CardProduct
                    productName={v.productName}
                    productImage={v.productImage}
                    productLocation={v.productLocation}
                    productPrice={v.productPrice}
                    productSeller={v.productSeller}
                    productId={v.id}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonList>
        </IonGrid>
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          style={{ paddingBottom: '20px', paddingRight: '10px' }}
        >
          <IonFabButton href="/add-food">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}

export default Home;
