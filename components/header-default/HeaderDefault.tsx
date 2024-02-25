import { Nav } from '../nav/index.js';
import { ModalDefault } from '../modal/index.js';
import { SearchForm } from '../search-form/index.js';
import { HeaderUserBtns } from '../header-actions-btns/index.js';
import { Logo } from '../logo/index.js';
import styles from './HeaderDefault.module.scss';

const HeaderDefault: React.FC = () => {

  return (
    <header className={ styles.header }>
      <div className={ styles.header__nav }>
        <div className="container">
          <Nav />
        </div>
      </div>
      <div className={ `container ${ styles.header__container }` }>
        <div className={ styles.logo }>
          <Logo />
          <ModalDefault />
        </div>
        <SearchForm />
        <HeaderUserBtns />
      </div>
    </header>
  )
};

export { HeaderDefault };