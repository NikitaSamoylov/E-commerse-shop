"use client";
import Link from 'next/link';
import NextImage from 'next/image';
import { Card, Col, Row, Flex } from 'antd';
import { MainBtn } from '../main-btn/index.js'; 
import catalogDefault from '../static-catalog/StaticCatalog';
import styles from './ModalCatalog.module.scss';
import './modal-catalog-default.scss';

const ModalCatalog:React.FC = () => {
  const catalogElements = catalogDefault.map(item => {
    return (
      <Col span={8} key={item.title}>
        <Link href="/">
            <Card title={item.title}
                bordered={true}
                className={styles.card}
                hoverable
                >
              <Flex align='center' justify='start'>
                <NextImage
                    src={item.img}
                    height={146}
                    alt="item.title"
                    className={styles.card__img}
                />
                <div className={styles.card__text}> 
                    <h3 className={styles.card__price}>от {item.price} руб.</h3>
                    <MainBtn color='#E83131'
                      title='смотреть'
                      link={item.link}
                    />
                </div>
              </Flex>
            </Card>
        </Link>
    </Col>
    )
  })

  return (
    <Row gutter={[16,16]}>
      { catalogElements }
    </Row>
  )
};

export { ModalCatalog };