'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  ConfigProvider,
  Flex,
  Space,
  Popconfirm,
  ColorPicker,
  ColorPickerProps
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import { addNewProduct } from '@/libs/utils/requests';
import { UploadImg } from '@/app/upload/page';
import { notifyInfo, notifySuccess } from '@/libs/utils/popupMsg';
import { redirect } from 'next/navigation';
import styles from './AddProduct.module.scss';

const { TextArea } = Input;

const AddProduct:React.FC = () => {
  const { data: session, status } = useSession();
  const [imgUrls, setImgUrls] = useState<any[]>([]);
  const [productColor, setProductColor] = useState<ColorPickerProps['value']>('#dddee0');

  useEffect(() => {
    if (
      status !== 'authenticated' &&
      session?.user?.role !== 'admin'
    ) {
      redirect('/');
    } 
  }, [status]);

  const setProductImgUrl = (url: any) => {
    setImgUrls(imgUrls => [...imgUrls, url])
  };

  const deleteProductImgUrl = (url: string) => {
    setImgUrls(imgUrls => imgUrls.filter(el => !el.match(url)))
  };

  const [loadings, setLoadings] = useState<boolean>(false);

  const [form] = useForm();

  const onFinish = async (values: any) => {
    setLoadings(true);
    const preparedProduct = await {
      ...values, 
      images: [
        {
          color: values.productColor,
          colorCode: productColor,
          image: [
            ...imgUrls
          ]
        }
      ]
    };

    await addNewProduct(preparedProduct)
      .then(() => {
        notifySuccess('продукт добавлен');
        setLoadings(false);
        onReset();
        setProductColor('#dddee0');
        setImgUrls([])
      })
      .catch(() => {
        notifyInfo('что-то пошло не так');
        setLoadings(false);
      })
  };

  const onReset = () => {
    form.resetFields()
  };

  return (
    <section className={ styles.addProduct__container }>
      <h3 className={ styles.addProduct__title }>
        Добавьте новый продукт
      </h3>
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
          name="normal_new_product"
          className="login-form"
          onFinish={ onFinish }
          form={ form }
        >
          <Form.Item
            name="name"
            rules={[{ 
              required: true, message: 'название до 58 символов'
             }]}
          >
            <Input placeholder={ 'название продукта' } 
              maxLength={ 58 }
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={ [{
              required: true, message: 'описание до 1050 символов'
            }] }
          >
            <TextArea placeholder="описание товара до 1050 символов"
              maxLength={ 1050 }
              autoSize
              allowClear
            />
          </Form.Item>
          <Flex>
            <Form.Item
              name="category"
              rules={ [{
                required: true, message: 'введите категорию'
              }] }
              style={{ width: '100%' }}
            >
              <Input placeholder={ 'категория: планшет, смартфон и т.д.' }
                maxLength={ 30 }
              />
            </Form.Item>
            <Space size={ 10 }/>
            <Form.Item
              name="brand"
              rules={ [{
                required: true, message: 'введите бренд'
              }] }
              style={ { marginLeft: 15, width: '100%' } }
            >
              <Input placeholder={ 'бренд товара' }
                maxLength={ 30 }
              />
            </Form.Item>
          </Flex>
          <Flex>
            <Form.Item
              name="price"
              rules={ [{
                required: true, message: 'введите цену'
              }] }
              style={{ width: '100%' }}
            >
              <Input placeholder={ 'цена' }
                maxLength={ 12 }
                type='number'
              />
            </Form.Item>
            <Space size={ 10 }/>
            <Form.Item
              name="quantity"
              rules={ [{
                required: true, message: 'количество от 1 шт.'
              }] }
              style={ { marginLeft: 15, width: '100%' } }
            >
              <Input placeholder={ 'сколько в наличии?' }
                minLength={ 1 }
                type='number'
              />
            </Form.Item>
          </Flex>
            <UploadImg
              setProductImgUrl={ setProductImgUrl }
              deleteProductImgUrl={ deleteProductImgUrl }
            />
          <Flex
            justify='space-between'
            style={{ marginTop: '15px' }}
          >
            <ColorPicker defaultValue="#1677ff"
              showText
              onChangeComplete={ 
                (color) => setProductColor(color.toHexString())
              }
              value={ productColor }
            />
            <Form.Item
              name={ 'productColor' }  
              style={{ width: '80%' }}  
            >
              <Input placeholder={ 'цвет' }
                minLength={ 1 }
                allowClear
              />
            </Form.Item>
          </Flex>
          <Flex
            align='center'
          >
            <Form.Item>
              <Button type="primary"
                htmlType="submit"
                className="login-form-button"
                style={ {
                  marginTop: '15px', marginBottom: 0
                } }
                loading={ loadings }
                disabled={ imgUrls.length === 0 ? true : false }
              >
                добавить новый продукт
              </Button>
            </Form.Item>
            <Popconfirm
              title="Очистить форму?"
              okText="Очистить"
              cancelText="Оставить"
              onConfirm={ onReset }
            >
              <Button
                className={ styles.addProduct__reset_btn }
                htmlType="button"
              >
                сбросить форму
              </Button>
            </Popconfirm>
          </Flex>
        </Form>
      </ConfigProvider >
    </section>
  )
};

export default AddProduct;








