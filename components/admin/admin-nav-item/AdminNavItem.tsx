'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Flex } from 'antd';
import styles from './AdminNavItem.module.scss';

type TAdminNavItemProps = {
  title: string;
  icon: JSX.Element;
  link: string;
};

const AdminNavItem: React.FC<TAdminNavItemProps> = (
  { title, icon, link }
) => {
  const pathname = usePathname();
  const isActive = (path:string) => path === pathname;

  return (
    <li>
      <Link href={ link }
        className={ 
          isActive(link) ? 
          styles.adminNav__link_active :
          styles.adminNav__link 
        }
      >
        <Flex align='center'
          justify='flex-start'
        >
          { icon }
          <h3 className={styles.adminNav__title}>
            { title }
          </h3>
        </Flex>
      </Link>
    </li>
  )
};

export { AdminNavItem };