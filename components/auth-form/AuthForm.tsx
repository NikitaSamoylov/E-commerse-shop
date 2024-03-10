import Link from 'next/link';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, ConfigProvider } from 'antd';
import './AuthForm.module.scss';
import './auth-form-default.scss';

const AuthForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
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
        },
      } }
    >
      <Form
        name="normal_login"
        className="login-form"
        onFinish={ onFinish }
      >
        <Form.Item
          name="email"
          rules={ [{ required: true, message: 'введите email' }] }
        >
          <Input prefix={ <UserOutlined className="site-form-item-icon" /> } placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={ [{ required: true, message: 'введите пароль' }] }
        >
          <Input
            prefix={ <LockOutlined className="site-form-item-icon" /> }
            type="password"
            placeholder="пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary"
            htmlType="submit"
            className="login-form-button"
            style={ { marginTop: '10px' } }
          >
            войти
          </Button>
          <span style={ { paddingLeft: '7px' } }>
            <Link className="login-form-forgot"
              href="/"
              style={ { color: '#2A7A94' } }
            >
              забыли пароль?
            </Link>
          </span>
        </Form.Item>
      </Form>
    </ConfigProvider >
  )
};

export { AuthForm };