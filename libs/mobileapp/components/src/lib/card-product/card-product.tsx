import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRow,
} from '@ionic/react';

import './card-product.module.css';

type CardProductProps = {
  productName: string;
  productPrice: number;
  productLocation: string;
  productImage: string;
  productSeller: string;
  padding?: string;
};

export function CardProduct({
  productName,
  productPrice,
  productLocation,
  productImage,
  productSeller,
  padding,
}: CardProductProps) {
  function numberWithCommas(x: number | string): string {
    return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

  return (
    <IonCard style={{ textAlign: 'left', margin: padding ? padding : '0' }}>
      <img src={productImage} alt={productName} />
      <IonCardHeader>
        <IonCardSubtitle>
          <b>{productName}</b>
        </IonCardSubtitle>
        <IonCardTitle style={{ fontSize: '18px' }}>
          <b>Rp {numberWithCommas(productPrice)}</b>
        </IonCardTitle>
        <IonRow
          className="ion-justify-content-between"
          style={{ marginTop: '20px' }}
        >
          <IonCardSubtitle>{productSeller}</IonCardSubtitle>
          <span style={{ marginTop: '20px' }} />
          <IonCardSubtitle>
            <i>{productLocation}</i>
          </IonCardSubtitle>
        </IonRow>
      </IonCardHeader>
    </IonCard>
  );
}

export default CardProduct;
