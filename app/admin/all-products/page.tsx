'use client';
import { useEffect, useState } from 'react';
import { getAllProducts } from '@/libs/utils/requests';
import { TNewProducts } from '@/types/catalog';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import styles from './allProducts.module.scss';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
};

type DataIndex = keyof DataType;

const AllProducts:React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => { setProducts(data) })
  }, []);

  // const productsData = () => {
    products.map((el, i) => {
      // return {
      //   key: i,
      //   name: el.name,

      console.log(el['name'])
      // }
    })
  // };

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  return (
    <section>
      <h3>
        Всего продуктов: { Array.from(products).length }
      </h3>
      <div>

      </div>
    </section>
  )
};

export default AllProducts;