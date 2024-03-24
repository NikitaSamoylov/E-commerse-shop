"use client";
import { useState } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, ConfigProvider, Flex } from 'antd';
import { checkUserSignInData } from '@/libs/utils/requests';
import { notifySuccess, notifyInfo } from '@/libs/utils/popupMsg';
import { handleFormState } from '@/store/cart-slice/modalForm-reducer';
import { useAppDispatch } from '@/hooks';
import './AuthForm.module.scss';
import './auth-form-default.scss';

const AuthForm: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
    setLoadings(true)
    await checkUserSignInData(values)
      .then(onAuthEnter)
      .catch(e => {
        notifyInfo('не верный email или пароль');
        setLoadings(false)
      })
  };

  const onAuthEnter = () => {
    dispatch(handleFormState())
    setLoadings(true)
    notifySuccess('вход подтвержден');
  };

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
          <Input prefix={ 
              <MailOutlined className="site-form-item-icon" /> 
            }
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={ [{ 
            required: true, message: 'введите пароль' 
          }] }
          hasFeedback
        >
          <Input.Password
            prefix={
              <LockOutlined className="site-form-item-icon" /> 
            }
            placeholder='пароль'
            minLength={ 6 }
          />
        </Form.Item>
        <Form.Item style={{marginBottom: 0}}>
          <Flex align='flex-start'
            justify='flex-start'
          >
            <Form.Item>
              <Button type="primary"
                htmlType="submit"
                className="login-form-button"
                style={ { 
                  marginTop: '15px', marginBottom: 0
                } }
                loading={loadings}
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