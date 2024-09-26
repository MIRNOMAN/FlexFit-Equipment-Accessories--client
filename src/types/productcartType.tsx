export type TProduct = {
  key: string; // This is not required as a prop, but will be used in map
  _id: string;
  id: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  images: string[];
  category: string;
};

export type ProductCartProps = {
  key: string; // This is not required as a prop, but will be used in map
  _id: string; // Ensure _id is included
  name: string;
  price: number;
  images: string[];
};
