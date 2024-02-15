import { Flex } from 'antd';
import { CountDown } from '../timer/index.js';
import styles from './ProductsOnSale.module.scss';

const ProductsOnSale: React.FC = () => {
    return (
        <Flex gap={30} align='top'>
            <div>
                <h2>До конца акции на смартфоны Xiaomi</h2>
                <span style={{ color: 'red', cursor: 'pointer' }}>Смотреть все акции</span>
            </div>
            <CountDown />
        </Flex>
    )
};


export { ProductsOnSale };