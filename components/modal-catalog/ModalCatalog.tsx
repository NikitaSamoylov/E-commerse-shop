"use client";
import Link from 'next/link';
import NextImage from 'next/image';
import { Card, Col, Row, Flex } from 'antd';
import { MainBtn } from '../main-btn/index.js'; 
import styles from './ModalCatalog.module.scss';
import './modal-catalog-default.scss';

import ImgPhone from './smartphone-catalog.png';
import ImgLaptop from './laptop-catalog.png';
import ImgTablets from './tablets-catalog.png';
import ImgPC from './pc-catalog.png';
import ImgOther from './pereferia.png';
import ImgPS from './ps-catalog.png';

const ModalCatalog:React.FC = () => {

    return (
        <Row gutter={[16,16]}>
        <Col span={8}>
            <Link href="/">
                <Card title="смартфоны"
                    bordered={true}
                    className={styles.card}
                    hoverable
                    >
                  <Flex align='center' justify='start'>
                    <NextImage
                        src={ImgPhone}
                        height={146}
                        alt="смартфоны"
                        className={styles.card__img}
                    />
                    <div className={styles.card__text}> 
                        <h3 className={styles.card__price}>от 4000 руб.</h3>
                        <MainBtn color='#E83131'
                          title='смотреть'
                          link="/"
                        />
                    </div>
                  </Flex>
                </Card>
            </Link>
        </Col>
        <Col span={8}>
          <Link href="/">
            <Card title="ноутбуки"
                bordered={true}
                className={styles.card}
                hoverable
                >
              <Flex align='center' justify='start'>
                <NextImage
                    src={ImgLaptop}
                    height={146}
                    alt="ноутбуки"
                    className={styles.card__img}
                />
                <div className={styles.card__text}> 
                    <h3 className={styles.card__price}>от 9000 руб.</h3>
                    <MainBtn color='#E83131'
                      title='смотреть'
                      link="/"
                    />
                </div>
              </Flex>
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link href="/">
            <Card title="планшеты"
                bordered={true}
                className={styles.card}
                hoverable
                >
              <Flex align='center' justify='start'>
                <NextImage
                    src={ImgTablets}
                    height={146}
                    alt="планшеты"
                    className={styles.card__img}
                />
                <div className={styles.card__text}> 
                    <h3 className={styles.card__price}>от 9000 руб.</h3>
                    <MainBtn color='#E83131'
                      title='смотреть'
                      link="/"
                    />
                </div>
              </Flex>
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link href="/">
            <Card title="ПК"
                bordered={true}
                className={styles.card}
                hoverable
                >
              <Flex align='center' justify='start'>
                <NextImage
                    src={ImgPC}
                    height={146}
                    alt="ПК"
                    className={styles.card__img}
                />
                <div className={styles.card__text}> 
                    <h3 className={styles.card__price}>от 11000 руб.</h3>
                    <MainBtn color='#E83131'
                      title='смотреть'
                      link="/"
                    />
                </div>
              </Flex>
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link href="/">
            <Card title="переферия"
                bordered={true}
                className={styles.card}
                hoverable
                >
              <Flex align='center' justify='start'>
                <NextImage
                    src={ImgOther}
                    height={146}
                    alt="переферия"
                    className={styles.card__img}
                />
                <div className={styles.card__text}> 
                    <h3 className={styles.card__price}>от 2000 руб.</h3>
                    <MainBtn color='#E83131'
                      title='смотреть'
                      link="/"
                    />
                </div>
              </Flex>
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link href="/">
            <Card title="консоли"
                bordered={true}
                className={styles.card}
                hoverable
                >
              <Flex align='center' justify='start'>
                <NextImage
                    src={ImgPS}
                    height={146}
                    alt="консоли"
                    className={styles.card__img}
                />
                <div className={styles.card__text}> 
                    <h3 className={styles.card__price}>от 2000 руб.</h3>
                    <MainBtn color='#E83131'
                      title='смотреть'
                      link="/"
                    />
                </div>
              </Flex>
            </Card>
          </Link>
        </Col>
      </Row>
    )
};

export { ModalCatalog };