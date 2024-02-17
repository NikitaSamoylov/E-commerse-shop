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

export type ProductCardProp = {
  id: string;
  title: string;
  img: StaticImageData;
  link: string;
  price: string;
  sale?: string;
};
