export type Product = {
  id: number;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  images: string[];
  category: string;
};

export type ProductCartProps = {
  id: string;
  name: string;
  price: number;
  images: string[];
};
