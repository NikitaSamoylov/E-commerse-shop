"use client";
import NextImage from 'next/image';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Card, Flex } from 'antd';
import { Badge } from 'antd';
import { MainBtn } from '../main-btn/index.js';
import { ProductCardProp } from '../../types/catalog';
import { Rating } from '../goods-rating/index';
import './card-template.scss';
import styles from './CardTemplate.module.scss';

const CardTemplate: React.FC<ProductCardProp> = (
  { id, title, img, price, itemNew = null, sale = null, rateCount }
) => {

  return (
    <Card title={ title }
      bordered={ true }
      className={ styles.card }
      hoverable
    >
      <Flex align='center' justify='start'>
        {
          sale && <Badge count={ `${ sale }%` }
            color='#E83131'
            size="default"
          >
            <NextImage
              src={ img }
              height={ 146 }
              alt={ title }
              className={ styles.card__img }
            />
          </Badge>
        }
        {
          itemNew && <Badge count={ 'новинка' }
            color='rgb(108 193 68)'
            size="small"
            style={ { paddingTop: '2px' } }
          >
            <NextImage
              src={ img }
              height={ 146 }
              alt={ title }
              className={ styles.card__img }
            />
          </Badge>
        }
        {
          sale || itemNew ?
            null :
            (<NextImage
              src={ img }
              height={ 146 }
              alt={ title }
              className={ styles.card__img }
            />)
        }
        <div className={ styles.card__text }>
          <h3 className={ styles.card__price }>от { price } руб.</h3>
          <MainBtn color='#E83131'
            title='смотреть'
            link={ `products/${ id }` }
          />
          { sale || itemNew ?
            <>
              <Flex gap={ 13 } className={ styles.card__icons }>
                <IoIosHeartEmpty
                  size={ 20 }
                  className={ styles.icon__item }
                />
                <PiShoppingCartSimpleLight
                  size={ 20 }
                  className={ styles.icon__item }
                />
              </Flex>
              <div className={ styles.card__rating }>
                <Rating rateCount={ rateCount } disabled={ true } />
              </div>
            </> :
            null
          }
        </div>
      </Flex>
    </Card>
  );
};

export { CardTemplate };