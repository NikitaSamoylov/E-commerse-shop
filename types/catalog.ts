import { StaticImageData } from "next/image";

export type TCatalogItem = {
  id: string;
  title: string;
  img: StaticImageData;
  link: string;
  price: string;
};

export type TCatalogItemSale = TCatalogItem & {
  sale: string;
}

export type TCatalogItemNew = TCatalogItem & {
  itemNew: string;
}

type TImages = {
  color: string,
  colorCode: string,
  image: StaticImageData,
};

export type ProductCardProp = {
  id: string;
  title: string;
  img: any;
  price: number;
  sale?: string;
  itemNew?: boolean;
  rateCount: number;
};

export type TNewProducts = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  itemNew: true,
  images: TImages[];
  reviews: string[];
};

export type TProductRam = {
  ram: number;
}


