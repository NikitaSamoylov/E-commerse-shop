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
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { notify } from '@/libs/utils/popupMsg';
import { ToastContainer } from 'react-toastify';
import { RURub } from '@/libs/utils/currency-intl';
import { TCart } from '../../types/cart';
import { removeItems } from '@/store/cart-slice/cart-reducer';
import { increaseCount } from '@/store/cart-slice/cart-reducer';
import { decreaseCount } from '@/store/cart-slice/cart-reducer';
import { handleFormState } from '@/store/cart-slice/modalForm-reducer';
import styles from './cart.module.scss';
import './transition-group.scss';

import { AuthModal } from '@/components/auth-modal/index';

const CartPage: React.FC = () => {
  let [itemsOnRemove, setItemsOnRemove] = useState<string[]>([]);
  const [mainCheckbox, setMainCheckbox] = useState<boolean>(false);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
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
    dispatch(removeItems([id]))
  };

  const handleMainCheckbox = () => {
    setMainCheckbox(mainCheckbox => !mainCheckbox);
  };

  const setProductPriceQty = () => {
    const subTotal = cartItemStore.reduce((currentSum, nextValue) => {
      return currentSum + (nextValue.price * nextValue.count)
    }, 0)
    setCartTotalPrice(subTotal)
  };

  useEffect(() => {
    if (cartItemStore.length === 0) {
      redirect('/')
    };

    setProductPriceQty();
  }, [cartItemStore]);

  useEffect(() => {
    handleOnDeleteItems();
  }, [mainCheckbox]);

  const deleteItems = () => {
    dispatch(removeItems(itemsOnRemove))
  };

  const increaseProductCount = (id: string) => {
    cartItemStore.map(el =>
      el.id === id &&
        el.count <= el.maxCount - 1 ?
        dispatch(increaseCount(id)) :
        el.id === id && el.count === el.maxCount ?
          notify('Последний товар') :
          el
    )
  };

  const decreaseProductCount = (idItem: string) => {
    cartItemStore.map(el =>
      (el.id === idItem) &&
        (el.count >= 2) ?
        dispatch(decreaseCount(idItem)) :
        el
    )
  };

  const handleFormOpen = () => {
    dispatch(handleFormState())
  };

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
                width={ 86 }
                height={ 110 }
                alt={ cartItem.name }
                className={ styles.cart__img }
              />
              <div>
                <span className={ styles.cart__category }>
                  { cartItem.category }
                </span>
                <h3 className={ styles.cart__product_title }>
                  <Link href={ `/products/${ cartItem.id }` }
                    className={ styles.cart__product_link }
                  >
                    { cartItem.name }
                  </Link>
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
                <button className={ styles.cart__counter_btn }
                  onClick={ () => increaseProductCount(cartItem.id) }
                >
                  <ToastContainer />
                  +
                </button>
                <span className={ styles.cart__counter_count }>
                  { cartItem.count }
                </span>
                <button className={ styles.cart__counter_btn }
                  onClick={ () => decreaseProductCount(cartItem.id) }
                >
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
        </li >
      </CSSTransition >
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
            disabled={ itemsOnRemove.length !== 0 ?
              false :
              true
            }
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
        <section className={ styles.cart__total }>
          <div className={ styles.cart_total__content }>
            <span className={ styles.cart_total__header }>
              Общая сумма:
            </span>
            <span className={ styles.cart_total__price }>
              { RURub.format(cartTotalPrice) }
            </span>
          </div>
          <div>
            <button className={ styles.cart__total_btn }
              onClick={ handleFormOpen }
            >
              Оформить покупку
            </button>
            <AuthModal/>
          </div>
        </section>
      </section>
    </>
  )
};

export default CartPage;