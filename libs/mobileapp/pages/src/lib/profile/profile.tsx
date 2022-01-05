import {
  IonPage,
  IonLabel,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonButton,
  IonRow,
  IonCol,
  IonAvatar,
} from '@ionic/react';

import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { CardProduct } from '@anti-food-waste/mobileapp/components';

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

type userProps = {
  createdAt: string;
  id: string;
  updatedAt: string;
  userAddress: string;
  userEmail: string;
  userName: string;
  userPassword: string;
  userPhoneNumber: string;
  userType: string;
};

export function Profile() {
  const [productFromNeighbor, setProductFromNeighbor] = useState<
    productProps[]
  >([]);
  const [storageData, setStorageData] = useState<userProps>();
  console.log(productFromNeighbor);

  useEffect(() => {
    async function getStorageData() {
      const getdata = window.localStorage.getItem('user');
      getdata && setStorageData(JSON.parse(getdata));
    }
    getStorageData();
  }, []);

  useEffect(() => {
    async function getProductData() {
      storageData &&
        axios
          .get(`http://localhost:8080/food/?userId=${parseInt(storageData.id)}`)
          .then((response) => {
            setProductFromNeighbor(response.data.userFood);
          });
    }
    getProductData();
  }, [storageData]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="md">
          <IonRow className="ion-justify-content-between">
            <IonTitle className="text-bold">Profil saya</IonTitle>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center profile">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAvatar>
                <img
                  src="https://sekolahutsman.sch.id/wp-content/uploads/2016/03/no-profile.png"
                  alt="profile"
                />
              </IonAvatar>
              <br />
              <IonLabel>
                <b>Emma Watson</b>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonButton
            color="dark"
            expand="block"
            fill="outline"
            className="ion-margin-bottom"
            href="/update-profile"
          >
            Ubah Profil
          </IonButton>
          <IonRow className="ion-padding-top">
            <b>Makanan yang kamu bagikan</b>
          </IonRow>
          <IonRow>
            {productFromNeighbor.length > 0 &&
              productFromNeighbor.map((v, i) => (
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
      </IonContent>
    </IonPage>
  );
}

export default Profile;
