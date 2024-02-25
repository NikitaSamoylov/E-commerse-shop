import { Divider, Flex } from 'antd';
import { Logo } from '../logo';
import { Nav } from '../nav';

import styles from './FooterDefault.module.scss';
import './footer-default.scss';

const FooterDefault: React.FC = () => {
  return (
    <div className={ styles.footer }>
      <Divider />
      <div className={ styles.footer__content }>
        <Flex align='center'
          justify='space-between'
        >
          <Logo />
          <Nav />
        </Flex>
      </div>
      <Divider />
      <span className={ styles.footer__signature }>
        &copy;Electronics, 2024
        <span>
          made by Nikita Samoylov
        </span>
      </span>
    </div >
  )
};

export { FooterDefault };