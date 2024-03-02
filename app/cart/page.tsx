"use client";
import {
  Checkbox,
  ConfigProvider,
  Flex,
  Divider
} from 'antd';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { useState, useEffect } from 'react';
import Img from 'next/image';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { RURub } from '@/libs/utils/currency-intl';
import { TCart } from '../../types/cart';
import { removeItems } from '@/store/cart-slice/cart-reducer';
import styles from './cart.module.scss';
import './transition-group.scss';

const CartPage: React.FC = () => {
  let [itemsOnRemove, setItemsOnRemove] = useState<string[]>([]);
  const [mainCheckbox, setMainCheckbox] = useState<boolean>(false);
  const cartItemStore = useAppSelector<TCart[]>(state => state.cartItem);
  const dispatch = useAppDispatch();

  const handleOnDeleteItems = () => {
    let productsIdInit: string[] = [];
    cartItemStore.map(el => productsIdInit.push(el.id));
    if (mainCheckbox) {
      setItemsOnRemove(productsIdInit)
    } else {
      return;
    }
  };

  const handleOnDeleteItem = (id: TCart) => {

    if (itemsOnRemove.includes(id.id)) {

      if (mainCheckbox) {
        setMainCheckbox(mainCheckbox => !mainCheckbox);
      }
      setItemsOnRemove(itemsOnRemove.filter(el => el !== id.id))
    } else {
      setItemsOnRemove([...itemsOnRemove, id.id])
    }
  };

  const handleOnDeleteItemBtn = (id: string) => {
    dispatch(removeItems(id))
  };

  const handleMainCheckbox = () => {
    setMainCheckbox(mainCheckbox => !mainCheckbox);
  };

  useEffect(() => {
    handleOnDeleteItems();
  }, [mainCheckbox]);

  const deleteItems = () => {
    dispatch(removeItems(itemsOnRemove))
  };

  console.log(itemsOnRemove)

  const cartLocalStore = useAppSelector(state => state.cartItem);
  const cartLocalStoreItems = cartLocalStore.map((cartItem: TCart) => {
    return (
      <CSSTransition
        key={ cartItem.id }
        timeout={ 500 }
        classNames="item"
      >
        <li className={ styles.cart__item }
        >
          <Flex align='flex-start'
            justify='space-between'
            style={ { paddingBottom: 25 } }
          >
            <Flex align='flex-start'
              justify='flex-start'
            >
              <ConfigProvider
                theme={ {
                  token: {
                    colorPrimary: 'rgb(10, 106, 166)'
                  },
                } }
              >
                {
                  itemsOnRemove.includes(cartItem.id) ?
                    <Checkbox className={ styles.cart__product_checkbox }
                      checked
                      onClick={ () => handleOnDeleteItem(cartItem) }
                    /> :
                    <Checkbox className={ styles.cart__product_checkbox }
                      onClick={ () => handleOnDeleteItem(cartItem) }
                    />
                }
              </ConfigProvider>
              <Img
                src={ cartItem.itemImg }
                width={ 76 }
                height={ 100 }
                alt={ cartItem.name }
                className={ styles.cart__img }
              />
              <div>
                <span className={ styles.cart__category }>
                  { cartItem.category }
                </span>
                <h3 className={ styles.cart__product_title }>
                  { cartItem.name }
                </h3>
                <span className={ styles.cart__product_price }>
                  { RURub.format(cartItem.price) }
                </span>
              </div>
            </Flex>
            <div className={ styles.cart__counter }>
              <Flex align='center'
                className={ styles.cart__counter_content }
              >
                <button className={ styles.cart__counter_btn }>
                  +
                </button>
                <span className={ styles.cart__counter_count }>
                  { cartItem.count }
                </span>
                <button className={ styles.cart__counter_btn }>
                  -
                </button>
              </Flex>
              <button className={ styles.cart__counter_subBtn }>
                в избранное
              </button>
              <button className={ styles.cart__counter_subBtn }
                onClick={ () => handleOnDeleteItemBtn(cartItem.id) }
              >
                удалить
              </button>
            </div>
            <div className={ styles.cart__product_total }>
              <span className={ styles.cart__product_total_total }>
                итого
              </span>
              <span className={ styles.cart__product_total_price }>
                { RURub.format(cartItem.price * cartItem.count) }
              </span>
            </div>
          </Flex>
          <Divider />
        </li>
      </CSSTransition>
    )
  })

  return (
    <>
      <h1 className={ styles.cart__title }>
        Корзина
      </h1>
      <section className={ styles.cart__header }>
        <Flex align='center'
          justify='space-between'
        >
          <ConfigProvider
            theme={ {
              token: {
                colorPrimary: 'rgb(10, 106, 166)'
              },
            } }
          >
            {
              !mainCheckbox ?
                <Checkbox onClick={ handleMainCheckbox } /> :
                <Checkbox onClick={ handleMainCheckbox } checked />
            }
          </ConfigProvider>
          <button className={ styles.cart__delete_item_btn }
            onClick={ deleteItems }
          >
            {
              mainCheckbox ?
                'удалить все' :
                'удалить выбранные'
            }
          </button>
        </Flex>
        <Divider />
      </section>
      <section className={ styles.cart__list }>
        <ul>
          <TransitionGroup component={ null }>
            { cartLocalStoreItems }
          </TransitionGroup>
        </ul>
      </section>
    </>
  )
};

export default CartPage;