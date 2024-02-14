import { StaticImageData } from "next/image";

export type TCatalogItem = {
    title: string;
    img: StaticImageData;
    link: string;
    price: string;
};
