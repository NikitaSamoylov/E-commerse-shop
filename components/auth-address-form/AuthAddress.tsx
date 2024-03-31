'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  LockOutlined,
  FileSearchOutlined
} from '@ant-design/icons';
import {
  Button,
  Input,
  ConfigProvider,
} from 'antd';
import { notifySuccess, notifyInfo } from '@/libs/utils/popupMsg';
import { updateUserAddress } from '@/libs/utils/requests';
import { findAddress } from '@/libs/utils/address-request';
import styles from './AuthAddress.module.scss';
import { redirect } from 'next/navigation';

interface IUserAddress {
  state: string;
  region: string;
  city: string;
  street: string;
  cityIndex:string;
};

const AuthAddressForm: React.FC = () => {
  const { data: session, status } = useSession();

  const [loadings, setLoadings] = useState<boolean>(false);
  const [confirmPass, setConfirmPass] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressResults, setAddressResults] = useState([]);
  const [newUserAddress, setNewUserAddress] = useState<IUserAddress>({
    state: 'данных нет',
    region: 'данных нет',
    city: 'данных нет',
    street: 'данных нет',
    cityIndex: 'данных нет',
  });

  useEffect(() => {
    if (status === 'authenticated') {
      setInitValues();
    } else {
        redirect('/')
      }
  }, []);

  const setUserConfirmPass = (e:React.ChangeEvent<HTMLElement>) => {
    setConfirmPass(e.target.value)
  };

  const setInitValues = () => {
    setNewUserAddress({
      state: session?.user?.address?.state ?
        session?.user?.address?.state : 'данных нет',
      region: session?.user?.address?.region ?
        session?.user?.address?.region : 'данных нет',
      city: session?.user?.address?.city ?
        session?.user?.address?.city : 'данных нет',
      street: session?.user?.address?.street ?
        session?.user?.address?.street : 'данных нет',
      cityIndex: session?.user?.address?.cityIndex ?
        session?.user?.address?.cityIndex: 'данных нет',
    }) 
  };

  const onFinish = async () => {
    setLoadings(true);
    await updateUserAddress(
      newUserAddress, session?.user?.id, session?.user?.email, confirmPass
    )
      .then(() => notifySuccess('данные обновлены'))
      .then(() => {
        setLoadings(false)
        setConfirmPass('')
      })
      .catch(e => {
        notifyInfo(e.message);
        setLoadings(false);
      })
  };

  const getValidatedAddress = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await findAddress(e.target.value)
      .then(showSearchResults)
  };

  const showSearchResults = (data: any) => {
    setIsModalOpen(isModalOpen => !isModalOpen);
    setAddressResults((data.suggestions).splice(0, 4))
  };

  const setUserAddress = (address: any) => {
    setIsModalOpen(false);
    setAddressResults(address);
    setUserAddressByFields(address)
  };

  const setUserAddressByFields = (address:any) => {
    setNewUserAddress({
      state: address.data.region_with_type,
      region: address.data.area_with_type,
      city: address.data.settlement_with_type,
      street: `${ address.data.street_with_type }
        ${ address.data.house_type_full ?
           address.data.house_type_full :
           '' }
        ${ address.data.house ?
            address.data.house :
            ''  }
        ${ address.data.flat_type ?
           address.data.flat_type :
           ''  }
        ${ address.data.flat ?
          address.data.flat :
          ''  }
      `,
      cityIndex: address.data.postal_code
    })
  };

  return (
    <div style={ { position: 'relative' } }>
        <ConfigProvider
          theme={ {
            token: {
              fontFamily: 'Inter',
              fontSize: 14,
              colorBorder: 'white',
              colorPrimary: '#2A7A94',
              controlOutline: 'white',
              colorText: 'grey',
            },
          } }
        >
          <Input
            prefix={ <FileSearchOutlined /> }
            style={{ marginBottom: 20 }}
            placeholder={ 'начните вводить адрес...' }
            allowClear
            onChange={ getValidatedAddress }
          />
        </ConfigProvider>
      <div className={ styles.addresses }>
        {
          Array.isArray(addressResults) ?
            (
              addressResults.map((item: any) => (
                <p className={ styles.addresses__item }
                  onClick={ () => setUserAddress(item) }
                >
                  { item.value }
                </p>
              ))
            ) :
            null
        }
      </div>
      <ul className={ styles.addresses__list }>
        <li className={ styles.addresses__list_item }>
          { newUserAddress.state }
        </li>
        <li className={ styles.addresses__list_item }>
          { newUserAddress.region }
        </li>
        <li className={ styles.addresses__list_item }>
          { newUserAddress.city }
        </li>
        <li className={ styles.addresses__list_item }>
          { newUserAddress.street }
        </li>
        <li className={ styles.addresses__list_item }>
          { newUserAddress.cityIndex }
        </li>
        {
          addressResults.length !== 0 ?
            (
              <Input.Password
                prefix={
                  <LockOutlined className="site-form-item-icon" />
                }
                placeholder='пароль для подтверждения'
                minLength={ 6 }
                style={ { width: 280, marginBottom: 20 } }
                onChange={ setUserConfirmPass }
              />
            ) :
            null
        }
          <Button type="primary"
            className={ styles.addresses__btn }
            loading={ loadings }
            onClick={ onFinish }
            disabled={ 
              confirmPass.length === 0 ? true : false 
            }
            style={{ 
              lineHeight: 0.4,
            }}
          >
            обновить данные
          </Button>
      </ul>
    </div>
  )
};

export { AuthAddressForm };




