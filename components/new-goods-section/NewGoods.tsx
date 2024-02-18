import { Row, Col } from 'antd';
import catalogDefaultNew from '../static-catalog-new/CatalogNew';
import { newProducts } from '../products-default-catalog/ProductsDefault';
import { CardTemplate } from '../product-card-template/index';
import styles from './NewGood.module.scss';

const NewGoods: React.FC = () => {
  const productsNew = newProducts.map((el) => {
    return (
      <Col span={ 8 } key={ el.id }>
        <CardTemplate
          key={ el.id }
          id={ el.id }
          title={ el.name }
          img={ el.images[0].image }
          price={ el.price }
          itemNew={ el.itemNew }
        />
      </Col>
    )
  })
  return (
    <>
      <h2 className='section__header'>Новинки в магазине</h2>
      <Row gutter={ [22, 16] }>
        { productsNew }
      </Row>
    </>
  )
};

export { NewGoods };