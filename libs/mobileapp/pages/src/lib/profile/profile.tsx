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

import { useState, useEffect } from 'react';

import { CardProduct } from '@anti-food-waste/mobileapp/components';
import { getProductFromNeighbor } from '@anti-food-waste/mobileapp/data-access';
type productProps = {
  id: number;
  productName: string;
  productImage: string;
  productLocation: string;
  productPrice: number;
  productSeller: string;
  productLabel: string;
};

export function Profile() {
  const [productFromNeighbor, setProductFromNeighbor] = useState<
    productProps[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const productNeighbor = await getProductFromNeighbor();
      setProductFromNeighbor(productNeighbor);
    }
    fetchData();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="md">
          <IonRow className="ion-justify-content-between">
            <IonTitle className="text-bold ">My profile</IonTitle>
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
          >
            Ubah Profile
          </IonButton>
          <IonRow className="ion-padding-top">
            <b>Makanan yang kamu bagikan</b>
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
      </IonContent>
    </IonPage>
  );
}

export default Profile;
