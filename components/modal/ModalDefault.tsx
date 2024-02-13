"use client";
import React, { useState } from 'react';
import { Button, ConfigProvider, Modal } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { ModalCatalog } from '../modal-catalog/ModalCatalog'; 

import './modal-default.scss';
import styles from './ModalDefault.module.scss';


const ModalDefault: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
        <ConfigProvider theme={{ token: { colorPrimary: '#E83131' }}}>
            <Button type="primary"
                size='large'
                icon={ <UnorderedListOutlined /> }
                onClick={showModal}
                className={styles.modal__btn}
            >
                Каталог
            </Button>
        </ConfigProvider>
        <Modal
            open={isModalOpen}
            onCancel={showModal}
            className={styles.modal}
            width="1155px"
        >
            <ModalCatalog />
        </Modal>
    </>
  );
};

export { ModalDefault };