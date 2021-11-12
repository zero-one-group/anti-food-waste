import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRow,
  IonIcon,
  IonGrid,
  IonRouterLink,
  IonFab,
  IonFabButton,
  IonSlides,
  IonSlide,
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
  productLabel: string;
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
        <IonToolbar mode="md">
          <IonTitle className="text-bold">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-between">
            <b>Dari akun official</b>
            <IonRouterLink href="#">see all</IonRouterLink>
          </IonRow>
          <IonSlides
            id="slider"
            options={{
              slidesPerView: '1.6',
              grabCursor: true,
            }}
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
                  productLabel={v.productLabel}
                  productId={v.id}
                />
              </IonSlide>
            ))}
          </IonSlides>

          <IonRow className="ion-justify-content-between">
            <b>Dari tetangga</b>
          </IonRow>
          <IonRow>
            {productFromNeighbor.map((v, i) => (
              <IonCol size="12" key={i}>
                <CardProduct
                  productName={v.productName}
                  productImage={v.productImage}
                  productLocation={v.productLocation}
                  productPrice={v.productPrice}
                  productSeller={v.productSeller}
                  productLabel={v.productLabel}
                  productId={v.id}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton href="/add-food">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}

export default Home;
