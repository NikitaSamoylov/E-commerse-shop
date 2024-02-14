import { MainCarousel } from '../components/carousel/index.js';
import { SubMenu } from '@/components/sub-menu/index.js'; 
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.carousel}>
        <MainCarousel />
      </div>
      <div className={styles.subMenu}>
        <SubMenu />
      </div>
    </>
  );
};
