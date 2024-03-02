"use client";
import NextImg from 'next/image';
import { useState } from 'react';
import { Flex, Divider } from 'antd';
import { useAppSelector } from '@/hooks';
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { useAppDispatch } from '@/hooks';
import { addItem } from '@/store/cart-slice/cart-reducer';
import { notify } from '../../../utils/popupMsg';
import { ToastContainer } from 'react-toastify';
import { defaultProduct } from './defaultProduct';
import { RURub } from '@/libs/utils/currency-intl';
import { Rating } from '@/components/goods-rating';
import { ProductColorPicker } from '@/components/product-color-picker/index';
import { ProductCountSelect } from '@/components/product-count-selector/index';
import { UserReviews } from '@/components/user-reviews/UserReviews';
import { TCart } from '../../../types/cart';
import styles from './Page.module.scss';
import React from 'react';

interface IProductProps {
  params: { id: string };
};

const Product: React.FC<IProductProps> = ({ params: { id } }) => {
  const dispatch = useAppDispatch();

  const [cartProduct, setCartProduct] = useState<TCart>({
    id: defaultProduct.id + 1,
    name: defaultProduct.name,
    price: defaultProduct.price,
    itemImg: defaultProduct.images[0].image[0],
    count: 1,
    color: defaultProduct.images[0].colorCode,
    colorName: defaultProduct.images[0].color,
    category: defaultProduct.category,
    onRemove: false,
  });
  const [activeBtn, setActiveBtn] = useState(defaultProduct.images[0].colorCode);
  const [userReviews, setUserReviews] = useState(defaultProduct.reviews);
  const [isBtnLocked, setIsBtnLocked] = useState<boolean>(false);

  const cartStore = useAppSelector(state => state.cartItem);

  const handleProduct = (colorCode: string) => {
    setCartProduct({
      ...cartProduct, color: colorCode
    });
    setActiveBtn(colorCode);
    findImg(colorCode);
  };

  const increaseProductCount = () => {
    setCartProduct({
      ...cartProduct, count: cartProduct.count + 1
    })
  };

  const decreaseProductCount = () => {
    if (cartProduct.count === 1) {
      return
    };

    setCartProduct({
      ...cartProduct, count: cartProduct.count - 1
    })
  };

  const addToCart = () => {
    dispatch(addItem(cartProduct));
    notify()
  };

  const findImg = (color: string) => {
    console.log(cartProduct)
    const img = defaultProduct.images.filter(item => item.colorCode === color);
    setCartProduct({
      ...cartProduct, itemImg: img[0].image[0], color: color
    })
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
            layout='responsive'
            priority
          />
        </div>
        <div>
          <div className={ styles.product__header }>
            <h2 className={ styles.product__title }>
              { defaultProduct.name }
            </h2>
            <h3 className={ styles.product__price }>
              { RURub.format(defaultProduct.price) }
            </h3>
            <Divider />
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
              <Divider style={ { margin: '18px 0' } } />
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
                  <ProductColorPicker colorCode={ image.colorCode }
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
              <ProductCountSelect
                productCount={ cartProduct.count }
                decreaseProductCount={ decreaseProductCount }
                increaseProductCount={ increaseProductCount }
              />
            </Flex>
            <Divider style={ { margin: '18px 0' } } />
            <div>
              <Flex align='center'
                justify='flex-start'
                gap={ 10 }
              >
                {
                  !isBtnLocked ?
                    (
                      <>
                        <button
                          style={ { color: '#E83131' } }
                          onClick={ addToCart }
                        >
                          в корзину
                          <ToastContainer />
                        </button>
                        <IoMdHeartEmpty size={ 23 }
                          color='red'
                          style={ { cursor: 'pointer' } }
                        />
                      </>
                    ) :
                    <button
                      style={ { color: '#E83131' } }
                      disabled
                    >
                      в корзине
                    </button>
                }
              </Flex>
            </div>
          </div>
        </div>
      </Flex>
      <div className={ styles.product__description }>
        <h3 className={ styles.product__description_title }>
          Описание
        </h3>
        <p className={ styles.product__description_text }>
          { defaultProduct.description }
        </p>
      </div>
      <div className={ styles.product__feedback }>
        <h3 style={ { color: 'black', marginBottom: '25px' } }>
          Отзывы о продукте
        </h3>
        <UserReviews userReviews={ userReviews } />
      </div>
    </>
  )
};

export default Product;