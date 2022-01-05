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

import { add } from 'ionicons/icons';
import { CardProduct } from '@anti-food-waste/mobileapp/components';

import axios from 'axios';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getProductFromOfficial } from '@anti-food-waste/mobileapp/data-access';

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

export function AllOfficialFood() {
  const [productFromOfficial, setProductFromOfficial] = useState<
    productProps[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      axios.get('http://localhost:8080/officialfood').then((response) => {
        setProductFromOfficial(response.data.officialFood);
      });
    }
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar mode="md">
          <IonTitle className="text-bold">semua makanan offcial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            {productFromOfficial.map((v, i) => (
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

export default AllOfficialFood;
