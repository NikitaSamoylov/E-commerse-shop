"use client";
import Link from 'next/link';
import { Col, Row } from 'antd';
import { CardTemplate } from '../product-card-template/index';
import catalogDefault from '../static-catalog/StaticCatalog';
import styles from './ModalCatalog.module.scss';

const ModalCatalog: React.FC = () => {
  const catalogElements = catalogDefault.map(item => {
    return (
      <Col span={ 8 }>
        <CardTemplate title={ item.title }
          key={ item.title }
          img={ item.img }
          link={ item.link }
          price={ item.price }
        />
      </Col>
    )
  });

  return (
    <Row gutter={ [16, 16] }>
      { catalogElements }
    </Row>
  )
};

export { ModalCatalog };