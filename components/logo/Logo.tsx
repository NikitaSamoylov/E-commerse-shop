import Link from 'next/link';
import { Londrina_Solid } from 'next/font/google';

import styles from './Logo.module.scss';

const Londrina = Londrina_Solid({
  subsets: ["latin"], weight: '400'
});

const Logo = () => {
  return (
    <div className={ styles.logo }>
      <Link href="/"
        className={
          `${ Londrina.className } ${ styles.logo__title }`
        }
      >
        Electronix
        <p className={ styles.logo__descr }>
          магазин электроники
        </p>
      </Link>
    </div>
  )
};

export { Logo };