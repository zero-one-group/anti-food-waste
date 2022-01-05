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

import axios from 'axios';

import { useEffect, useState } from 'react';

type userParamsProps = {
  userType: string;
  userPhoneNumber: string;
  userName: string;
  userAddress: string;
};

type productProps = {
  id: number;
  createdAt: string;
  updatedAt: string;
  foodTitle: string;
  foodPrice: number;
  foodCategory: string;
  foodDescription: string;
  foodImage: string;
  pickUpTimes: string;
  userId: number;
  User: userParamsProps;
};

export function Home() {
  const [productFromPersonal, setProductFromPersonal] = useState<
    productProps[]
  >([]);
  const [productFromOfficial, setProductFromOfficial] = useState<
    productProps[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      axios.get('http://localhost:8080/officialfood').then((response) => {
        setProductFromOfficial(response.data.officialFood);
      });
      axios.get('http://localhost:8080/personalfood').then((response) => {
        setProductFromPersonal(response.data.personalFood);
      });
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
            <IonRouterLink href="/all-official-food">see all</IonRouterLink>
          </IonRow>
          <IonSlides
            id="slider"
            options={{
              slidesPerView: '1.6',
              grabCursor: true,
            }}
            className={`ion-padding-bottom`}
          >
            {productFromOfficial &&
              productFromOfficial.map((v, i) => (
                <IonSlide key={i}>
                  <CardProduct
                    productName={v.foodTitle}
                    productImage={v.foodImage}
                    productLocation={v.User.userAddress}
                    productPrice={v.foodPrice}
                    productSeller={v.User.userName}
                    productLabel={v.foodCategory}
                    productId={v.id}
                  />
                </IonSlide>
              ))}
          </IonSlides>

          <IonRow className="ion-justify-content-between">
            <b>Dari tetangga</b>
            <IonRouterLink href="/all-unofficial-food">see all</IonRouterLink>
          </IonRow>
          <IonRow>
            {productFromPersonal &&
              productFromPersonal.map((v, i) => (
                <IonCol size="12" key={i}>
                  <CardProduct
                    productName={v.foodTitle}
                    productImage={v.foodImage}
                    productLocation={v.User.userAddress}
                    productPrice={v.foodPrice}
                    productSeller={v.User.userName}
                    productLabel={v.foodCategory}
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
