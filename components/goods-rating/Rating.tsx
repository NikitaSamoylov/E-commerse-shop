"use client";
import { useState } from 'react';
import { Flex, Rate } from 'antd';
import styles from './Rating.module.scss';
import './rating-default.scss';

type TRateCount = {
  rateCount: number;
  disabled: boolean;
};

const Rating: React.FC<TRateCount> = ({ rateCount, disabled = true }) => {
  const [value, setValue] = useState(rateCount);

  return (
    <Flex gap="small" vertical>
      <Rate onChange={ setValue } value={ value } disabled={ disabled } />
    </Flex>
  )
}

export { Rating };