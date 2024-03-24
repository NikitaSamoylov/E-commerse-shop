"use client";
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import { LockOutlined,
          UserOutlined,
          MailOutlined
        } from '@ant-design/icons';
import { Button,
        Form,
        Input,
        ConfigProvider,
        Checkbox,
        Flex
       } from 'antd';
import { sendUserSignupData } from '@/libs/utils/requests';
import { useAppDispatch } from '@/hooks';
import { handleFormState } from '@/store/cart-slice/modalForm-reducer';
import { TUserSignUp } from '@/types/userSignup';
import { notifySuccess, notifyInfo } from '@/libs/utils/popupMsg';
import { updateUserData } from '@/libs/utils/requests';
import styles from './RegistrationForm.module.scss';

const RegistrationForm: React.FC = () => {
  const { data: session, status } = useSession();

  const dispatch = useAppDispatch();
  const [loadings, setLoadings] = useState<boolean>(false);
  const [confirmPass, setConfirmPass] = useState<boolean>(false);

  const onFieldsChange = () => {
    setConfirmPass(true)
  };

  const onFinish = async (values: TUserSignUp) => {
    setLoadings(true)
    { 
      status === 'authenticated' && 
        (
          await updateUserData(values, session?.user?.id)
            .then(() => notifySuccess('данные обновлены'))
            .then(() => signInWithNewData(values))
            .then(() => {
              setLoadings(false)
            })
            .catch(e => {
              notifyInfo(e.message);
              setLoadings(false);
            })
        )
    }

    {
      status !== 'authenticated' &&
        (
          await sendUserSignupData(values)
            .then(() => notifySuccess('учётная запись создана'))
            .then(() => {
              setTimeout(() => {
                dispatch(handleFormState());
                notifySuccess('вход подтвержден');
                setLoadings(false)
              }, 3000)
            })
            .then(() => signIn("credentials", {
                email: values.email.toLowerCase(),
                password: values.password,
                redirect: false,
              }))
            .catch(e => {
              notifyInfo(e.message);
              setLoadings(false);
            })
        )
    }
  };

  const signInWithNewData = (values: any) => {
    signIn("credentials", {
      email: values.email.toLowerCase(),
      password: values.password,
      redirect: false,
    });
    setConfirmPass(false);
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
        name="normal_registration"
        className="login-form"
        onFinish={ onFinish }
        onFieldsChange={ onFieldsChange }
      >
        <Form.Item
          name="secondName"
          rules={ [{ required: true, message: 'введите фамилию' }] }
          initialValue={ session?.user ? session?.user?.secondName : null }
        >
          <Input prefix={ <UserOutlined className="site-form-item-icon" /> }
            placeholder={ 'фамилия' }
          />
        </Form.Item>
        <Form.Item
          name="name"
          rules={ [{ required: true, message: 'введите ваше имя' }] }
          initialValue={ session?.user ? session?.user?.name : null }
        >
          <Input prefix={ <UserOutlined className="site-form-item-icon" /> }
            placeholder={ 'имя' }
          />
        </Form.Item>
        <Form.Item
          name="thirdName"
          initialValue={ session?.user ? session?.user?.thirdName : null }
        >
          <Input prefix={ <UserOutlined className="site-form-item-icon" /> }
            placeholder={ 'отчество' }
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={ [
            { required: true, message: 'введите email' },
            { type: 'email', message: 'пароль не валиден' }
          ] }
          initialValue={ session?.user?.email }
        >
          <Input prefix={ <MailOutlined className="site-form-item-icon" /> }
            placeholder={ 'email' }
          />
        </Form.Item>
        {
          status && status !== 'authenticated' &&
          (
            <>
            <Form.Item
              name="password"
              rules={ [{ required: true, message: 'введите пароль'}] }
              hasFeedback
          >
            <Input.Password 
              prefix={ <LockOutlined className="site-form-item-icon" /> }
              placeholder='пароль'
              minLength={6}
            />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={ ['password'] }
              hasFeedback
              rules={ [
                {
                  required: true,
                  message: 'введите пароль',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('пароли не совпадают'));
                  },
                }),
              ] }
            >
              <Input.Password 
                prefix={ <LockOutlined className="site-form-item-icon" /> }
                placeholder='подтвердите пароль'
              />
              </Form.Item>
              <Form.Item>
                <Button type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={ { marginTop: '10px' } }
                  loading={ loadings }
                >
                  зарегистрироваться
                </Button>
              </Form.Item>
              <Form.Item style={ { marginBottom: 10 } }>
                <Flex align='flex-start'
                  justify='flex-start'
                >
                  <ConfigProvider
                    theme={ {
                      token: {
                        colorBorder: '#d9d9d9'
                      },
                    } }
                  >
                    <Checkbox required />
                  </ConfigProvider>
                  <span className={ styles.form__notify_content }>
                    согласен с&thinsp;
                    <span className={ styles.form__notify_link }>
                      <Link href="/">
                        Пользовательским соглашением&thinsp;
                      </Link>
                    </span>
                    и&thinsp;
                    <span className={ styles.form__notify_link }>
                      <Link href="/">
                        Политикой конфиденциальности
                      </Link>
                    </span>
                  </span>
                </Flex>
              </Form.Item>
            </>
          )
        }
        {
          status && status === 'authenticated' && 
            (
              <>
                <Form.Item
                  name="phone"
                  initialValue={ session?.user ? session?.user?.phone : null }
                >
                  <Input
                    addonBefore='+7'
                    placeholder='телефон'
                    minLength={ 10 }
                    type='tel'
                    maxLength={10}
                  />
                </Form.Item>
              {
                confirmPass &&
                  (
                    <Form.Item
                      name="password"
                      rules={ [{ required: true, message: 'пароль для подтверждения' }] }
                      hasFeedback
                      style={{ transition: '.3s' }}
                    >
                      <Input.Password
                        prefix={ <LockOutlined className="site-form-item-icon" /> }
                        placeholder='пароль для подтверждения изменений'
                        minLength={ 6 }
                      />
                    </Form.Item>
                  )
              }
                <Form.Item>
                  <Button type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={ { marginTop: '10px' } }
                    loading={ loadings }
                  >
                    обновить данные
                  </Button>
                </Form.Item>
              </>
            )
        }
      </Form>
    </ConfigProvider >
  )
};

export { RegistrationForm };




