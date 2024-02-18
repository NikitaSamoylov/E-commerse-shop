import { Flex } from 'antd';
import styles from './ProductCountSelect.module.scss';

type TProductCount = {
  productCount: number;
}

const ProductCountSelect: React.FC<TProductCount> = (
  { productCount }
) => {

  return (
    <Flex className={ styles.button }
      align='center'
      gap={ 10 }
    >
      <button className={ styles.button__item }>+</button>
      <span className={ styles.button__count }>{ productCount }</span>
      <button className={ styles.button__item }>-</button>
    </Flex>
  )
};

export { ProductCountSelect };