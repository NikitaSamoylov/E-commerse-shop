import { Flex, Row, Col } from 'antd';
import { CountDown } from '../timer/index.js';
import { CardTemplate } from '../product-card-template/index';
import catalogDefaultSale from '../static-catalog-onsale/StaticCatalogSale';
import styles from './ProductsOnSale.module.scss';

const ProductsOnSale: React.FC = () => {
  const productsOnSale = catalogDefaultSale.map(el => {
    return (
      <Col span={ 8 }>
        <CardTemplate
          key={ el.title }
          title={ el.title }
          img={ el.img }
          link={ el.link }
          price={ el.price }
          sale={ el.sale }
        />
      </Col>
    )
  });

  return (
    <>
      <Flex gap={ 32 }
        align='top'
        className={ styles.onSale__header }>
        <div className="section__header">
          <h2>До конца акции на смартфоны Realme</h2>
          <span className={ styles.onSale__subtitle }>
            Смотреть все акции
          </span>
        </div>
        <CountDown />
      </Flex>
      <Row gutter={ [22, 16] }>
        { productsOnSale }
      </Row>
    </>
  )
};

export { ProductsOnSale };