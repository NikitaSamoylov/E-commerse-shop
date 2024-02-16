import { MainCarousel } from '../components/carousel/index';
import { SubMenu } from '@/components/sub-menu/index';
import { ProductsOnSale } from '@/components/onsale-section/index';
import { NewGoods } from '@/components/new-goods-section/index';
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <section className={
        `${ styles.carousel } ${ styles.section }`
      }>
        <MainCarousel />
      </section>
      <section className={
        `${ styles.subMenu } ${ styles.section }`
      }>
        <SubMenu />
      </section>
      <section className={
        `${ styles.onSale } ${ styles.section }`
      }>
        <ProductsOnSale />
      </section>
      <section className={
        `${ styles.onSale } ${ styles.section }`
      }>
        <NewGoods />
      </section>
    </>
  );
};
