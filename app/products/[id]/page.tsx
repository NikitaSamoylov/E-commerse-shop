"use client";
import NextImg from 'next/image';
import { useState } from 'react';
import { Flex } from 'antd';
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { defaultProduct } from './defaultProduct';
import { Rating } from '@/components/goods-rating';
import { ProductColorPicker } from '@/components/product-color-picker/index';
import { ProductCountSelect } from '@/components/product-count-selector/index';
import styles from './Page.module.scss';

interface IProductProps {
  params: { id: string };
};

type TCartProduct = {
  id: string;
  name: string;
  price: number;
  itemImg: string;
  count: number;
  color?: string;
  colorName: string;
  ram: number;
}

const Product: React.FC<IProductProps> = ({ params: { id } }) => {

  const CartProduct: TCartProduct = {
    id: defaultProduct.id,
    name: defaultProduct.name,
    price: defaultProduct.price,
    itemImg: defaultProduct.images[0].image[0],
    count: 1,
    color: '',
    colorName: defaultProduct.images[0].color,
    ram: defaultProduct.ram[0],
  }

  const [cartProduct, setCartProduct] = useState<TCartProduct>(CartProduct);
  const [activeBtn, setActiveBtn] = useState(defaultProduct.images[0].colorCode);
  const [productCount, setProductCount] = useState<number>(0);

  const handleProduct = (color: string) => {
    setCartProduct(() => ({
      ...cartProduct, color
    }))
    setActiveBtn(color);
    findImg(color);
  };

  const findImg = (color: string) => {
    const img = defaultProduct.images.filter(item => item.colorCode === color);
    setCartProduct({
      ...cartProduct, itemImg: img[0].image[0]
    })
    console.log(img)
  };

  const rateCount = Math.ceil(defaultProduct.reviews.reduce((acc, el) => {
    return el.rating + acc
  }, 0) / defaultProduct.reviews.length);

  const reviewsLength = defaultProduct.reviews.length;

  return (
    <>
      <Flex gap={ 20 } className={ styles.product }>
        <div className={ styles.product__img }>
          <NextImg
            src={ cartProduct.itemImg }
            width={ 600 }
            height={ 405.76 }
            alt={ 'фото' }
            priority
          />
        </div>
        <div>
          <div className={ styles.product__header }>
            <h2 className={ styles.product__title }>
              { defaultProduct.name }
            </h2>
            <Flex className={ styles.rating }
              align='center'
              gap={ 15 }
            >
              <Rating rateCount={ rateCount }
                disabled={ true } />
              <span className={ styles.product__reviews }>
                { reviewsLength } оценки
              </span>
            </Flex>
            <span>
              { defaultProduct.inStock ?
                (
                  <Flex align="center"
                    className={ styles.product__stock }
                    gap={ 7 }>
                    <CiCircleCheck size={ 22 } />
                    <span className={ styles.product__stock_title }>
                      в наличии
                    </span>
                  </Flex>
                ) :
                (
                  <Flex align="center"
                    className={ styles.product__stock }
                    gap={ 7 }>
                    <CiCircleRemove size={ 22 } />
                    <span className={ styles.product__stock_title }>
                      нет в наличии
                    </span>
                  </Flex>
                )
              }
            </span>
            <Flex className={ styles.product__colorPicker }
              gap={ 15 }
              justify='flex-start'
              align='center'
            >
              <span className={ styles.product__colorPicker_title }>
                цвета
              </span>
              { defaultProduct.images.map((image) => {
                return (
                  <ProductColorPicker color={ image.colorCode }
                    key={ image.colorCode }
                    handleProduct={ handleProduct }
                    activeBtn={ activeBtn }
                  />
                )
              }) }
            </Flex>
            <Flex className={ styles.product__count }
              gap={ 15 }
              justify='flex-start'
              align='center'
            >
              <span className={ styles.product__count_title }>
                количество
              </span>
              <ProductCountSelect productCount={ productCount } />
            </Flex>
          </div>
        </div>
      </Flex>
      <h3 className={ styles.product__description_title }>Описание</h3>
      <p className={ styles.product__description }>
        { defaultProduct.description }
      </p>
    </>
  )
};

export default Product;