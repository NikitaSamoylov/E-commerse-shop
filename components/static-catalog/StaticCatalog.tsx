import { TCatalogItem } from '../../types/catalog';

import ImgPhone from './smartphone-catalog.png';
import ImgLaptop from './laptop-catalog.png';
import ImgTablets from './tablets-catalog.png';
import ImgPC from './pc-catalog.png';
import ImgOther from './pereferia.png';
import ImgPS from './ps-catalog.png'

const catalogDefault: TCatalogItem[] = [
  { title: 'смартфоны', img: ImgPhone, link: '/', price: '4000' },
  { title: 'ноутбуки', img: ImgLaptop, link: '/', price: '9000' },
  { title: 'планшеты', img: ImgTablets, link: '/', price: '6000' },
  { title: 'ПК', img: ImgPC, link: '/', price: '11000' },
  { title: 'переферия', img: ImgOther, link: '/', price: '2000' },
  { title: 'консоли', img: ImgPS, link: '/', price: '17000' },
  { title: 'apple', img: ImgPS, link: '/', price: '17000' },
  { title: 'samsung', img: ImgPS, link: '/', price: '17000' },
];

export default catalogDefault;