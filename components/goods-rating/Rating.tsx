"use client";
import { useState } from 'react';
import { Flex, Rate } from 'antd';
import styles from './Rating.module.scss';
import './rating-default.scss';

const Rating: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <Flex gap="small" vertical>
      <Rate onChange={ setValue } value={ value } />
    </Flex>
  )
}

export { Rating };