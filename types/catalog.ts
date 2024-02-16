import { StaticImageData } from "next/image";

export type TCatalogItem = {
  title: string;
  img: StaticImageData;
  link: string;
  price: string;
};

export type TCatalogItemSale = TCatalogItem & {
  sale: string;
}

export type ProductCardProp = {
  title: string;
  img: StaticImageData;
  link: string;
  price: string;
  sale?: string;
};
