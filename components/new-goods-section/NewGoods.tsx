import { Row, Col } from 'antd';
import catalogDefaultNew from '../static-catalog-new/CatalogNew';
import { CardTemplate } from '../product-card-template/index';
import styles from './NewGood.module.scss';

const NewGoods: React.FC = () => {
  const productsNew = catalogDefaultNew.map((el) => {
    return (
      <Col span={ 8 } key={ el.id }>
        <CardTemplate
          key={ el.id }
          id={ el.id }
          title={ el.title }
          img={ el.img }
          link={ el.link }
          price={ el.price }
          newItem={ el.newItem }
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