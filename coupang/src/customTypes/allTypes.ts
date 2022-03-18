export interface IData {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productUrl: string;
  keyword?: string;
  rank: number;
  isRocket: boolean;
  isFreeShipping: boolean;
  nextLink?: string;
}
