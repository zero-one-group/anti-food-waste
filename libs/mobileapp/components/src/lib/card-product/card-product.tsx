import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRow,
} from '@ionic/react';

type CardProductProps = {
  productName: string;
  productPrice: number;
  productLocation: string;
  productImage: string;
  productSeller: string;
};

export function CardProduct({
  productName,
  productPrice,
  productLocation,
  productImage,
  productSeller,
}: CardProductProps) {
  function numberWithCommas(x: number | string): string {
    return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

  return (
    <IonCard style={{ textAlign: 'left' }}>
      <img src={productImage} alt={productName} />
      <IonCardHeader>
        <IonCardSubtitle>
          <b>{productName}</b>
        </IonCardSubtitle>
        <IonCardTitle>
          <b>Rp {numberWithCommas(productPrice)}</b>
        </IonCardTitle>
        <IonRow
          className="ion-justify-content-between"
          style={{ marginTop: '20px' }}
        >
          <IonCardSubtitle>{productSeller}</IonCardSubtitle>
          <IonCardSubtitle>
            <i>{productLocation}</i>
          </IonCardSubtitle>
        </IonRow>
      </IonCardHeader>
    </IonCard>
  );
}

export default CardProduct;
