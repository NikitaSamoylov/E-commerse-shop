import Link from 'next/link';

import styles from './Nav.module.scss';

const Nav:React.FC = () => {
    const navItems = [
        { title: 'гарантия', link: '/warranty'},
        { title: 'доставка', link: '/shipping'},
        { title: 'оплата', link: '/payment'},
        { title: 'о компании', link: '/about'},
        { title: 'контакты', link: '/contacts'},
        { title: 'trade-in', link: '/tradein'},
        { title: '8 800 777 500', link: 'tel:8800777500'},
        
    ]

    const navElements = navItems.map((el) => {
        return (
            <li key={el.title} className={styles.nav__item}>
                <Link href={ el.link } style={{color: 'inherit'}}>{ el.title }</Link>
            </li>
        )
    })

    return ( 
        <ul className={styles.nav}>
          { navElements }
        </ul>
     )
}

export { Nav } ;