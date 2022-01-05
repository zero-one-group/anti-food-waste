import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRow,
  IonIcon,
  IonGrid,
  IonFab,
  IonFabButton,
  IonCol,
} from '@ionic/react';

import axios from 'axios';

import { add } from 'ionicons/icons';
import { CardProduct } from '@anti-food-waste/mobileapp/components';

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
export function AllUnofficialFood() {
  const [productFromPersonal, setProductFromPersonal] = useState<
    productProps[]
  >([]);

  useEffect(() => {
    async function fetchData() {
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
          <IonTitle className="text-bold">semua makanan dari tetangga</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            {productFromPersonal.map((v, i) => (
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

export default AllUnofficialFood;
