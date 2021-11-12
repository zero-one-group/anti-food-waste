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

import { arrowBack } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getProductDetail } from '@anti-food-waste/mobileapp/data-access';

type productProps = {
  id: number;
  productName: string;
  productImage: string;
  productLocation: string;
  productPrice: number;
  productSeller: string;
  description: string;
  productLabel: string;
};

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [productDetail, setProductDetail] = useState<productProps>();

  useEffect(() => {
    async function fetchData() {
      const product = await getProductDetail(parseInt(id));
      setProductDetail(product);
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
            {productDetail?.productName}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid className="ion-margin-bottom">
          <img
            src={productDetail?.productImage}
            alt={productDetail?.productName}
          />
          <IonRow className="product-detail-price">
            {productDetail?.productPrice !== 0 ? (
              <IonText>Rp {productDetail?.productPrice}</IonText>
            ) : (
              <IonText>Free</IonText>
            )}
          </IonRow>
          <IonRow>
            <IonText className="product-detail-name">
              {productDetail?.productName}
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
                <IonText>{productDetail?.productSeller}</IonText>
              </IonRow>
              <IonRow>
                <IonText>{productDetail?.productLocation}</IonText>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonText className="product-detail-category">Kategori: </IonText>
            <div className="card-product-label">
              {productDetail?.productLabel}
            </div>
          </IonRow>
          <IonRow className="product-detail-description">
            <IonText>Deskripsi</IonText>
            <IonText>{productDetail?.description}</IonText>
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
