import { Flex } from 'antd';
import styles from './ProductCountSelect.module.scss';

type TProductCount = {
  productCount: number;
  decreaseProductCount: () => void;
  increaseProductCount: () => void;
}

const ProductCountSelect: React.FC<TProductCount> = (
  { productCount, decreaseProductCount, increaseProductCount }
) => {

  return (
    <Flex className={ styles.button }
      align='center'
      gap={ 10 }
    >
      <button className={ styles.button__item }
        onClick={ increaseProductCount }
      >
        +
      </button>
      <span className={ styles.button__count }>
        { productCount }
      </span>
      <button className={ styles.button__item }
        onClick={ decreaseProductCount }
      >
        -
      </button>
    </Flex>
  )
};

export { ProductCountSelect };