import { Nav } from '../nav/index.js'; 
import styles from './HeaderDefault.module.scss';

const HeaderDefault:React.FC = () => {
    return (
        <header>
            <div className={styles.header__nav}>
                <div className="container">
                    <Nav/>
                </div>
            </div>
            <div className="container"></div>
        </header>
    )
};

export { HeaderDefault };