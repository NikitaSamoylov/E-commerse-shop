"use client";
import styles from './ProductColorPicker.module.scss';

type TRadioProps = {
  color: string;
  handleProduct: (color: string) => void;
  activeBtn: string;
}

const ProductColorPicker: React.FC<TRadioProps> = ({ color, handleProduct, activeBtn }) => {


  return (
    <button className={ styles.color__btn }
      style={ activeBtn === color ? { transform: 'scale(1.4)', backgroundColor: color } : { backgroundColor: color } }
      value={ color }
      onClick={ () => handleProduct(color) }
    >
    </button>
  )
};

export { ProductColorPicker };