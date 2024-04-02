import { LuLayoutList, LuListChecks } from "react-icons/lu";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { AdminNavItem } from '../admin-nav-item/index';
import styles from './AdminNav.module.scss';

const AdminNav:React.FC = () => {
  const adminNavItems = [
    { 
      title: 'статистика',
      icon: <RxDashboard />,
      link: '/admin' 
    },
    { 
      title: 'новый продукт',
      icon: <MdOutlineAddToPhotos />,
      link: '/admin/add-product' 
    },
    { 
      title: 'продукты', 
      icon: <LuLayoutList />, 
      link: '/admin/products' 
    },
    { 
      title: 'заказы', 
      icon: <LuListChecks />, 
      link: '/admin/orders' 
    },
  ];

  return (
  <>
    <section
      className={styles.adminNav__section}
    >
      <ul className={ styles.adminNav__list }>
        {
          adminNavItems.map((item, index) => (
            <AdminNavItem
              key={ index }
              { ...item }
            />
          ))
        }
      </ul>
    </section>
  </>
  )
};

export { AdminNav };