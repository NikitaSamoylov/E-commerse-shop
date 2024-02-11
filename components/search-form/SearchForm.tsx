import { SearchOutlined  } from '@ant-design/icons';
import styles from './SearchForm.module.scss';

const SearchForm:React.FC = () => {
    return (
        <form className={styles.form} action="">
            <input className={styles.form__input} type="text"/>
            <SearchOutlined className={styles.form__icon}/>
        </form>
    )
};

export { SearchForm };
