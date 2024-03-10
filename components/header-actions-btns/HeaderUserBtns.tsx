"use client";
import Link from 'next/link';
import { Badge } from 'antd';
import { LuHeart } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import { useAppSelector } from '@/hooks';
import styles from './HeaderUserBtns.module.scss';
import './userBtns_default.scss';
import './favorites.png';

const HeaderUserBtns: React.FC = () => {
  const cartItems = useAppSelector(state => state.cartItem);

  return (
    <ul className={ styles.userBtns }>
      <li className={ styles.userBtns__item }>
        <button style={ { backgroundColor: 'transparent' } }>
          <Badge count={ 0 }
            offset={ [10, 10] }
            className={ styles.userBtns__item_icon }
          >
            <RiUserLine size={ 20 } color='grey' />
          </Badge>
          <div className={ styles.userBtns__name }>
            войти
          </div>
        </button>
      </li>
      <li className={ styles.userBtns__item }>
        <button style={ { backgroundColor: 'transparent' } }>
          <Badge count={ 0 }
            size='small'
            className={ styles.userBtns__item_icon }
          >
            <LuHeart size={ 20 } color='grey' />
          </Badge>
          <div className={ styles.userBtns__name }>
            избранное
          </div>
        </button>
      </li>
      <li className={ styles.userBtns__item }>
        <Link href="/cart">
          <button style={ { backgroundColor: 'transparent' } }
            disabled={ cartItems.length !== 0 ? false : true }
          >
            <Badge count={ cartItems.length }
              size='small'
              className={ styles.userBtns__item_icon }
            >
              <LuShoppingCart size={ 20 }
                color='grey' />
            </Badge>
            <div className={ styles.userBtns__name }>
              корзина
            </div>
          </button>
        </Link>
      </li >
    </ul >
  )
};

export { HeaderUserBtns };