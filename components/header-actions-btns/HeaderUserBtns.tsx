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
        <button className={ styles.userBtns__item_icon }>
          <Badge count={ 0 } offset={ [10, 10] } >
            <RiUserLine size={ 20 } color='grey' />
          </Badge>
        </button>
        <Link className={ styles.userBtns__link } href="/">
          войти
        </Link>
      </li>
      <li className={ styles.userBtns__item }>
        <button className={ styles.userBtns__item_icon }>
          <Badge count={ 0 } size='small'>
            <LuHeart size={ 20 } color='grey' />
          </Badge>
        </button>
        <Link className={ styles.userBtns__link } href="/">
          избранное
        </Link>
      </li>
      <li className={ styles.userBtns__item }>
        <button className={ styles.userBtns__item_icon }>
          <Badge count={ cartItems.length } size='small'>
            <LuShoppingCart size={ 20 } color='grey' />
          </Badge>
        </button>
        <Link className={ styles.userBtns__link } href="/">
          корзина
        </Link>
      </li>
    </ul>
  )
};

export { HeaderUserBtns };