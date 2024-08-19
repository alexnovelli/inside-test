export interface Product {
  name: string;
  description: string;
}

export interface Order {
  orderNumber: number;
  date: string;
  products: Product[];
}
