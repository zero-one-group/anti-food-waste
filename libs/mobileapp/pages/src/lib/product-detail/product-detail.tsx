import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonButtons,
  IonBackButton,
  IonRow,
  IonButton,
  IonText,
  IonCol,
  IonAvatar,
} from '@ionic/react';

import axios from 'axios';

import { arrowBack } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [productDetail, setProductDetail] = useState<productProps>();

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`http://localhost:8080/food/detailfood/?id=${parseInt(id)}`)
        .then((response) => {
          setProductDetail(response.data.foodDetail);
        });
    }
    fetchData();
  }, [id]);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle className="text-bold ion-no-padding">
            {productDetail?.foodTitle}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid className="ion-margin-bottom">
          <img src={productDetail?.foodImage} alt={productDetail?.foodTitle} />
          <IonRow className="product-detail-price">
            {productDetail?.foodPrice !== 0 ? (
              <IonText>Rp {productDetail?.foodPrice}</IonText>
            ) : (
              <IonText>Free</IonText>
            )}
          </IonRow>
          <IonRow>
            <IonText className="product-detail-name">
              {productDetail?.foodTitle}
            </IonText>
          </IonRow>

          <IonRow className="product-detail-seller-container">
            <IonAvatar>
              <img
                src="https://sekolahutsman.sch.id/wp-content/uploads/2016/03/no-profile.png"
                alt="profile"
              />
            </IonAvatar>
            <IonCol className="product-detail-seller">
              <IonRow>
                <IonText>{productDetail?.User.userName}</IonText>
              </IonRow>
              <IonRow>
                <IonText>{productDetail?.User.userAddress}</IonText>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonText className="product-detail-category">Kategori: </IonText>
            <div className="card-product-label">
              {productDetail?.foodCategory}
            </div>
          </IonRow>
          <IonRow className="product-detail-description">
            <IonText>Deskripsi</IonText>
            <IonText>{productDetail?.foodDescription}</IonText>
          </IonRow>
          <IonRow className="product-detail-description ion-margin-top">
            <IonText>Pick up times</IonText>
            <IonText>Bisa diambil pada saat jam 6 - 8 malam</IonText>
          </IonRow>
        </IonGrid>
        <IonButton expand="block" className="ion-margin-top">
          Request this item
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

export default ProductDetail;
