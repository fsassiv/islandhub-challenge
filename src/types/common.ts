export type SlideTypes = {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  description: string;
  cta_btn_label: string;
  img_url: string;
};

export type ProductTypes = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  img_name: string;
};

export type DataResponseTypes = {
  products: ProductTypes[];
  slides: SlideTypes[];
  reviews_count: number;
  popular_ratins: number;
};
