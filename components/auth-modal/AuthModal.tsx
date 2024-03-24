"use client";
import { Modal, ConfigProvider, Tabs } from 'antd';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { handleFormState } from '@/store/cart-slice/modalForm-reducer';
import { AuthForm } from '../auth-form/AuthForm';
import { RegistrationForm } from '../auth-registration-form/RegistrationForm';

import './AuthModal.module.scss';
import './auth-modal-default.scss';

const AuthModal: React.FC = () => {
  const modalFormStore = useAppSelector<boolean>(state => state.modalForm);
  const dispatch = useAppDispatch();

  return (
    <Modal open={ modalFormStore }
      onCancel={ () => dispatch(handleFormState()) }
    >
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
          <Tabs
            defaultActiveKey='1'
            items={ [
              {
                label: 'Вход',
                key: '1',
                children: <AuthForm />,
              },
              {
                label: 'Регистрация',
                key: '2',
                children: <RegistrationForm />,
              },
            ] }
          />
      </ConfigProvider>
    </Modal >
  )
};

export { AuthModal };