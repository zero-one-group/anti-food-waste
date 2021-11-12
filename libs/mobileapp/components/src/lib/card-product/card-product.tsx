import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonRow,
  IonText,
} from '@ionic/react';

type CardProductProps = {
  productName: string;
  productPrice: number;
  productLocation: string;
  productImage: string;
  productSeller: string;
  productId: number;
  productLabel: string;
};

export function CardProduct({
  productName,
  productPrice,
  productLocation,
  productImage,
  productId,
  productLabel,
}: CardProductProps) {
  function numberWithCommas(x: number | string): string {
    return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

  return (
    <IonCard
      href={`/product-detail/${productId}`}
      className="card-product ion-text-left ion-no-padding"
    >
      <IonRow className="overflow-hidden card-image">
        <img src={productImage} alt={productName} />
      </IonRow>
      <IonCardHeader mode="md">
        <div className="card-product-name">
          <IonText>{productName}</IonText>
        </div>
        <IonRow>
          <div className="card-product-label">{productLabel}</div>
        </IonRow>
        <IonCardTitle mode="md">
          {productPrice !== 0 ? (
            <b>Rp {numberWithCommas(productPrice)}</b>
          ) : (
            <b>Free</b>
          )}
        </IonCardTitle>
        <IonText>{productLocation}</IonText>
      </IonCardHeader>
    </IonCard>
  );
}

export default CardProduct;
