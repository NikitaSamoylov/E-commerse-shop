"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, ConfigProvider, Flex } from 'antd';
import { signIn, useSession } from 'next-auth/react';
import { checkUserSignInData } from '@/libs/utils/requests';
import { notifySuccess, notifyInfo } from '@/libs/utils/popupMsg';
import { handleFormState } from '@/store/cart-slice/modalForm-reducer';
import { useAppDispatch } from '@/hooks';
import './AuthForm.module.scss';
import './auth-form-default.scss';

const AuthForm: React.FC = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
    await checkUserSignInData(values)
      .then(() => notifySuccess('вход подтвержден'))
      .catch(e => notifyInfo('не верный email или пароль'))
  };

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      setIsAuthenticated(isAuthenticated => !isAuthenticated);
      dispatch(handleFormState());
    }
  }, [session])

  return (
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
      <Form
        name="normal_auth"
        className="login-form"
        onFinish={ onFinish }
      >
        <Form.Item
          name="email"
          rules={ [
            { required: true, message: 'введите email' },
            { type: 'email', message: 'пароль не валиден' }
          ] }
        >
          <Input prefix={ <MailOutlined className="site-form-item-icon" /> }
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={ [{ required: true, message: 'введите пароль' }] }
          hasFeedback
        >
          <Input.Password
            prefix={ <LockOutlined className="site-form-item-icon" /> }
            placeholder='пароль'
            minLength={ 6 }
          />
        </Form.Item>
        <Form.Item>
          <Flex align='flex-start'
            justify='flex-start'
            style={ { marginTop: -15 } }
          >
            <Form.Item>
              <Button type="primary"
                htmlType="submit"
                className="login-form-button"
                style={ { marginTop: '15px' } }
              >
                войти
              </Button>
            </Form.Item>
          </Flex>
        </Form.Item>
      </Form>
    </ConfigProvider >
  )
};

export { AuthForm };