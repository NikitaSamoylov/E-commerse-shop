'use client';
import React, { useState } from 'react';
import { ImgStorage } from '@/libs/firebase';
import { ref, uploadBytesResumable, deleteObject, getDownloadURL } from 'firebase/storage';
import { Upload, Button, Flex } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { notifyInfo, notifySuccess } from '@/libs/utils/popupMsg';
import styles from './upload.module.scss';

type TUploadProps = {
  setProductImgUrl: (value:any) => void;
  deleteProductImgUrl: (value:string) => void;
};

const UploadImg: React.FC<TUploadProps> = (
  { setProductImgUrl, deleteProductImgUrl }
) => {

  const [filesOnUploading, setFilesOnUploading] = useState<File[]>([]);

  const addFilesOnUploading = (info:any) => {
      info.file.status === 'done' ?
        setFilesOnUploading(filesOnUploading => [...filesOnUploading, info]) :
        info.file.status
  };

  const deleteUploadedImg = async (info:any) => {
    setFilesOnUploading(
      filesOnUploading.filter(el => el.file.name !== info.name)
    );
  };
  // const deleteUploadedImg = async (info:any) => {
  //   const desertRef = ref(ImgStorage, info.name);

  //   await deleteObject(desertRef)
  //     .then(() => deleteProductImgUrl(info.name))
  //     .catch((error) => {
  //       notifyInfo('ошибка удаления фото')
  //     });
  // };

  const uploadFiles = () => {
    let fileRef: any;
    filesOnUploading.map(async(el) => {
      fileRef = ref(ImgStorage, el.file.name);
      await uploadBytesResumable(fileRef, el.file.originFileObj)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((url) => setProductImgUrl(url))
              .then(() => setFilesOnUploading([]))
          })
          .catch(() => notifyInfo('не удалось загрузить файл'))
    })
  };

  // };
  // const uploadFiles = async (info:any) => {
  //   if (info.file.status === 'done') {
  //     const fileRef = ref(
  //       ImgStorage, info.file.name
  //     );
  //     await uploadBytesResumable(fileRef, info.file.originFileObj)
  //       .then((snapshot) => {
  //         getDownloadURL(snapshot.ref)
  //           .then((url) => setProductImgUrl(url))
  //       })

  //   } else if (info.file.status === 'error') {
  //    notifyInfo('ошибка в загрузке файла')
  //   }
  // };

  return (
    <>
      <Flex>
        <Upload 
          onChange={ addFilesOnUploading }
          // onChange={ uploadFiles }
          onRemove={ deleteUploadedImg }
          className={ styles.upload }
        >
          <Button icon={ <UploadOutlined /> }>
            Добавьте 3 фото
          </Button>
        </Upload>
        {  
          filesOnUploading.length !== 0 ?
           ( <Button className='button'
              style={ { marginLeft: 10 } }
              onClick={ uploadFiles }
            >
              загрузить
            </Button>) :
            null
        }
      </Flex>
    </>
  )
}

export { UploadImg };