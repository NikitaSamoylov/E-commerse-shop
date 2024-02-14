import { TCatalogItem } from '../../types/catalog';

import ImgPhone from '../modal-catalog/smartphone-catalog.png';
import ImgLaptop from '../modal-catalog/laptop-catalog.png';
import ImgTablets from '../modal-catalog/tablets-catalog.png';
import ImgPC from '../modal-catalog/pc-catalog.png';
import ImgOther from '../modal-catalog/pereferia.png';
import ImgPS from '../modal-catalog/ps-catalog.png'

const catalogDefault: TCatalogItem[] = [
    { title: 'смартфоны', img: ImgPhone, link: '/', price: '4000' },
    { title: 'ноутбуки', img: ImgLaptop, link: '/', price: '9000' },
    { title: 'планшеты', img: ImgTablets, link: '/', price: '6000' },
    { title: 'ПК', img: ImgPC, link: '/', price: '11000' },
    { title: 'переферия', img: ImgOther, link: '/', price: '2000' },
    { title: 'консоли', img: ImgPS, link: '/', price: '17000' },
  ];

  export default catalogDefault;