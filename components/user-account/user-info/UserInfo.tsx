'use client';
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { Tabs, TabsProps, ConfigProvider } from 'antd';
import { RegistrationForm } from "@/components/auth-registration-form/index";
import { AuthAddressForm } from "@/components/auth-address-form/index";

import styles from './UserInfo.module.scss';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'данные',
    children: <RegistrationForm/>,
  },
  {
    key: '2',
    label: 'адрес',
    children: <AuthAddressForm/>,
  },
];

const UserInfo:React.FC = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== 'authenticated') {
      redirect('/')
    }
  }, []);

  return (
    <div className={ styles.userInfo__form}>
      <ConfigProvider
        theme={ {
          components: {
            Tabs: {
              itemSelectedColor: '#2C2C2D',
              itemColor: 'grey',
              itemHoverColor: '#2C2C2D',
              titleFontSize: 18,
              inkBarColor: '#E83131',
              fontFamily: 'Inter'
            },
          },
        } }
      >
        <Tabs defaultActiveKey="1"
          items={ items }
        />
      </ConfigProvider>
    </div>
  )
}

export { UserInfo };