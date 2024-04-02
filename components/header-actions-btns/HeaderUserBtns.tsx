"use client";
import Link from 'next/link';
import NextImg from 'next/image';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Badge, DropdownProps, MenuProps, Dropdown, Flex, ConfigProvider } from 'antd';
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { useAppSelector, useAppDispatch } from '@/hooks';
import { handleFormState } from '@/store/cart-slice/modalForm-reducer';
import { AuthModal } from '../auth-modal';
import styles from './HeaderUserBtns.module.scss';
import './userBtns_default.scss';
import './favorites.png';

import Img from './user-registered.png';

const HeaderUserBtns: React.FC = () => {
  const { data: session } = useSession();
  const cartItems = useAppSelector(state => state.cartItem);
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleUserMenuClick: MenuProps['onClick'] = (e) => {
    setOpenUserMenu(false);
  };

  const handleUserOpenChange: DropdownProps['onOpenChange'] = (
    nextOpen, info
  ) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpenUserMenu(nextOpen);
    }
  };

  let items: MenuProps['items']; 

  session?.user?.role === 'admin' ?
    (items = [
      {
        label: <Link href='/admin'>админка</Link>,
        key: '1',
      },
      {
        label: <Link href='/account'>мой аккаунт</Link>,
        key: '2',
      },
      {
        label: <span onClick={ () => signOut() }>выйти</span>,
        key: '3',
      },
    ]) :
    (items = [
      {
        label: <Link href='/account'>мой аккаунт</Link>,
        key: '1',
      },
      {
        label: <span onClick={ () => signOut() }>выйти</span>,
        key: '2',
      },
    ]);

  const handleAuthForm = () => {
    dispatch(handleFormState())
  };

  return (
    <>
      <ul className={ styles.userBtns }>
        {
          !session &&
          <li className={ styles.userBtns__item }>
            <button style={ { backgroundColor: 'transparent' } }
              onClick={ handleAuthForm }
            >
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
        }
        {
          session &&
          <li className={ styles.userBtns__item }>
            <button style={ { backgroundColor: 'transparent' } }>
              <Badge count={ 0 }
                offset={ [10, 10] }
                className={ styles.userBtns__item_icon }
              >
                  <NextImg 
                    src={ Img }
                    width={20}
                    height={20}
                    alt='user'
                  />
              </Badge>
                <div className={ styles.userBtns__name }>
                  <ConfigProvider
                    theme={ {
                      token: {
                        fontSize: 14,
                        fontFamily: 'Inter'
                      },
                    } }
                  >
                    <Dropdown
                      menu={ {
                        items,
                        onClick: handleUserMenuClick,
                      } }
                      onOpenChange={ handleUserOpenChange }
                      open={ openUserMenu }
                    >
                      <a onClick={ (e) => e.preventDefault() }>
                        <Flex align='center'>
                          { session?.user?.name }
                          <MdOutlineKeyboardArrowDown />
                        </Flex>
                      </a>
                    </Dropdown>
                  </ConfigProvider>
                </div>
            </button>
          </li>
        }
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
      <AuthModal/>
    </>
  )
};

export { HeaderUserBtns };