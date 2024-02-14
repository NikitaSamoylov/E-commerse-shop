import Link from 'next/link';
import { Flex } from 'antd';
import catalogDefault from '../static-catalog/StaticCatalog';
import styles from './SubMenu.module.scss';

const SubMenu:React.FC = () => {
    const elements = catalogDefault.map(el => {
        return (
            <li key={el.title} className={styles.subMenu__item}>
                <Link href={el.link} className={styles.subMenu__link}>
                    <h3 className={styles.subMenu__title}>
                        {el.title}
                    </h3>
                </Link>
            </li>
        )
    })

    return (
        <ul className={styles.subMenu}>
            <Flex wrap='wrap' gap={16}>
                {elements}
            </Flex>
        </ul>
    )
};

export { SubMenu };