"use client";
import { Flex } from 'antd';

import styles from './ProductRam.module.scss';

type TProductRamProps = {
  ram: number;
  handleRam: (ram: number) => void;
  currentRam: number;
}

const ProductRam: React.FC<TProductRamProps> = (
  { ram, handleRam, currentRam }
) => {

  return (
    <div>
      <Flex justify='flex-start' gap={ 5 }>
        <button className={ currentRam === ram ?
          `${ styles.btn__ram_active } ${ styles.btn__ram }` :
          styles.btn__ram
        }
          onClick={ () => handleRam(ram) }
        >
          { ram }
        </button>
      </Flex>
    </div>
  )
};

export { ProductRam };