import { TCatalogItemSale } from '../../types/catalog';

import ImgPhone from './phone-sale.png';

const catalogDefaultSale: TCatalogItemSale[] = [
  { id: '1', title: 'Realme C67', img: ImgPhone, link: '/', price: '12000', sale: '21' },
  { id: '2', title: 'Realme 11', img: ImgPhone, link: '/', price: '34000', sale: '18' },
  { id: '3', title: 'Realme C51', img: ImgPhone, link: '/', price: '22000', sale: '23' },
];

export default catalogDefaultSale;