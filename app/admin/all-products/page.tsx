'use client';
import { useEffect, useState, useRef } from 'react';
import { getAllProducts } from '@/libs/utils/requests';
import { RiEditLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { deleteProduct } from '@/libs/utils/requests';
import styles from './allProducts.module.scss';

const AllProducts:React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => { setProducts(data) })
  }, [products]);

  const onProductRemove = (_id: string) => {
    deleteProduct(_id)
  };

  return (
    <section className={ styles.allProducts }>
      <h3 className={ styles.allProducts__title }>
        Всего продуктов: { Array.from(products).length }
      </h3>
      <div>
        { 
          products.map(el => {
            return (
            <>
              <div className={ styles.products__list }>
                <span className={ styles.products__item }>
                  { el['name'] }
                </span>
                <span className={ styles.products__item }>
                  { el['category'] }
                </span>
                <span className={ styles.products__item }>
                  { el['price'] }
                </span>
                <div>
                  <button className={ styles.products__btn }>
                    <RiEditLine 
                      size={ 16 } 
                      color='#2A7A94'
                      style={{ position: 'relative', top: 1 }}
                    />
                  </button>
                  <button className={ styles.products__btn }
                      onClick={ () => onProductRemove(el['_id']) }
                  >
                    <FaRegTrashCan size={ 15 } color='#2A7A94'/>
                  </button>
                </div>
              </div>
            </>
            )
          })
        }
      </div>
    </section>
  )
};

export default AllProducts;