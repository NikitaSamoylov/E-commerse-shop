"use client";
import { Flex } from 'antd';
import styles from './ProductColorPicker.module.scss';

type TRadioProps = {
  colorCode: string;
  handleProduct: (color: string) => void;
  activeBtn: string;
}

const ProductColorPicker: React.FC<TRadioProps> = ({ colorCode, handleProduct, activeBtn }) => {

  return (
    <Flex gap={ 0 }>
      <button className={ styles.color__btn }
        style={
          activeBtn === colorCode ?
            { transform: 'scale(1.4)', backgroundColor: colorCode } :
            { backgroundColor: colorCode } }
        value={ colorCode }
        onClick={ () => handleProduct(colorCode)
        }
      >
      </button>
    </Flex>
  )
};

export { ProductColorPicker };