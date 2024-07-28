export type Product = {
  id: number | string;
  image?: string;
  price: number | string;
  name: string;
};

export type ProductProps = {
  product: Product;
  showAnimation?: boolean;
  onClick?: (id: number | string) => void;
};
