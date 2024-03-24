import { LuLayoutList, LuListChecks } from "react-icons/lu";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Flex, Divider } from 'antd';
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
      title: 'добавить продукт',
      icon: <MdOutlineAddToPhotos />,
      link: '/admin/product-new' 
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
      <ul>
        <Flex
          align='center'
          justify='space-between'
        >
          {
            adminNavItems.map((item, index) => (
              <AdminNavItem
                key={ index }
                { ...item }
              />
            ))
          }
        </Flex>
      </ul>
    </section>
    <Divider/>
  </>
  )
};

export { AdminNav };