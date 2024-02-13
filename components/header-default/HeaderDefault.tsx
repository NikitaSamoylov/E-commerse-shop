import Link from 'next/link.js';
import { Nav } from '../nav/index.js'; 
import { ModalDefault } from '../modal/index.js';
import { SearchForm } from '../search-form/index.js'; 
import { HeaderUserBtns } from '../header-actions-btns/index.js'; 
import { Londrina_Solid } from 'next/font/google'; 
import styles from './HeaderDefault.module.scss';

const Londrina = Londrina_Solid({ subsets: ["latin"], weight: '400' });

const HeaderDefault:React.FC = () => {
    return (
        <header>
            <div className={ styles.header__nav }>
                <div className="container">
                    <Nav/>
                </div>
            </div>
            <div className={`container ${ styles.header__container }`}>
                <div className={ styles.logo }>
                    <Link href="/"
                        className={`${ Londrina.className } ${ styles.logo__title }`}
                    >
                        Electronix
                    <p className={ styles.logo__descr }>магазин б/у электроники</p>
                    </Link>
                    <Link href="/">
                        <ModalDefault />
                    </Link>
                </div>
                <SearchForm />
                <HeaderUserBtns/>
            </div>
        </header>
    )
};

export { HeaderDefault };