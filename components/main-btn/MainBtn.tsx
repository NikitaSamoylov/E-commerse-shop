import { ConfigProvider, Button } from 'antd';

import styles from './MainBtn.module.scss';

interface BtnProps {
  color?: string;
  title: string;
  link?: string;
};

const MainBtn: React.FC<BtnProps> = (
  { color = '#E83131', title, link }
) => {

  return (
    <ConfigProvider theme={ { token: { colorPrimary: color } } }>
      <Button type="primary"
        className={ styles.card__btn }
        size='middle'
        href={ link }
      >
        { title }
      </Button>
    </ConfigProvider>
  )
};

export { MainBtn };
