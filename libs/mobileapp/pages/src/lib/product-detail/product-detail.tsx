import {
  IonPage,
  IonLabel,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonButtons,
  IonBackButton,
  IonRow,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
} from '@ionic/react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getProductDetail } from '@anti-food-waste/mobileapp/data-access';
import { share } from 'ionicons/icons';

type productProps = {
  id: number;
  productName: string;
  productImage: string;
  productLocation: string;
  productPrice: number;
  productSeller: string;
  description: string;
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
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>{productDetail?.productName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <img
            src={productDetail?.productImage}
            alt={productDetail?.productName}
          />
          <IonRow style={{ marginTop: '25px' }}>
            <b>{productDetail?.productSeller}</b>
          </IonRow>
          <IonRow>
            <b style={{ fontSize: '25px', marginTop: '20px' }}>
              {productDetail?.productName}
            </b>
          </IonRow>
          <IonRow style={{ textAlign: 'left', marginTop: '10px' }}>
            {productDetail?.description}
          </IonRow>
          <IonRow
            style={{ fontSize: '20px', textAlign: 'left', marginTop: '20px' }}
          >
            <b>Pick up times</b>
          </IonRow>
          <IonRow style={{ textAlign: 'left', marginTop: '10px' }}>
            Bisa diambil pada saat jam 6 - 8 malam
          </IonRow>
        </IonGrid>
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          style={{ paddingBottom: '20px', paddingRight: '10px' }}
        >
          <IonButton style={{ margin: 'auto' }}>Request this item</IonButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}

export default ProductDetail;