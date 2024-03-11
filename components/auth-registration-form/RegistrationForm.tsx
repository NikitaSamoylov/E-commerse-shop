"use client";
import Link from 'next/link';
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
import { TUserSignUp } from '@/types/userSignup';
import { notifySuccess, notifyInfo } from '@/libs/utils/popupMsg';
import styles from './RegistrationForm.module.scss';

const RegistrationForm: React.FC = () => {

  const onFinish = async (values: any) => {
    await sendUserSignupData(values)
      .then(() => notifySuccess('учётная запись создана'))
      .catch(e => notifyInfo(e.message))
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
      >
        <Form.Item
          name="name"
          rules={ [{ required: true, message: 'введите ваше имя' }] }
        >
          <Input prefix={ <UserOutlined className="site-form-item-icon" /> }
            placeholder="ваше имя"
          />
        </Form.Item>
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
          >
            зарегистрироваться
          </Button>
        </Form.Item>
        <Form.Item>
          <Flex align='flex-start'
            justify='flex-start'
            style={{marginTop: -15}}
          >
            <ConfigProvider
              theme={ {
                token: {
                  colorBorder: '#d9d9d9'
                },
              } }
            >
              <Checkbox required/>
            </ConfigProvider>
            <span className={styles.form__notify_content}>
              согласен с&thinsp;
                <span className={styles.form__notify_link}>
                  <Link href="/">
                    Пользовательским соглашением&thinsp;
                  </Link>
                </span>
              и&thinsp;
                <span className={styles.form__notify_link}>
                  <Link href="/">
                    Политикой конфиденциальности
                  </Link>
                </span>
            </span>
          </Flex>
        </Form.Item>
      </Form>
    </ConfigProvider >
  )
};

export { RegistrationForm };




