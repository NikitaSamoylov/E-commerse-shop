import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderUserBtns.module.scss';
import './favorites.png';

const HeaderUserBtns:React.FC = () => {
    return (
        <ul className={styles.userBtns}>
            <li className={styles.userBtns__item}>
                <Link className={styles.userBtns__link} href="/">
                    избранное
                </Link>
            </li>
            <li className={styles.userBtns__item}>
                <Link className={styles.userBtns__link} href="/">корзина</Link>
            </li>
            <li className={styles.userBtns__item}>
                <Link className={styles.userBtns__link} href="/">войти</Link>
            </li>
        </ul>
    )
};

export { HeaderUserBtns };