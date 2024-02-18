"use client";
import { Flex } from 'antd';
import styles from './ProductColorPicker.module.scss';

type TRadioProps = {
  color: string;
  handleProduct: (color: string) => void;
  activeBtn: string;
}

const ProductColorPicker: React.FC<TRadioProps> = ({ color, handleProduct, activeBtn }) => {


  return (
    <Flex gap={ 0 }>
      <button className={ styles.color__btn }
        style={
          activeBtn === color ?
            { transform: 'scale(1.4)', backgroundColor: color } :
            { backgroundColor: color } }
        value={ color }
        onClick={ () => handleProduct(color)
        }
      >
      </button>
    </Flex>
  )
};

export { ProductColorPicker };