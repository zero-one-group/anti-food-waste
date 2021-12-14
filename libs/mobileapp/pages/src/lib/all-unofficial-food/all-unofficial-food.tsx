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

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getProductFromNeighbor } from '@anti-food-waste/mobileapp/data-access';

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

export function AllUnofficialFood() {
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
      <IonHeader translucent>
        <IonToolbar mode="md">
          <IonTitle className="text-bold">semua makanan dari tetangga</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
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

export default AllUnofficialFood;
