import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTypeSelector } from '../hooks/redux';

import { booksApi } from '../store/reducers/booksApi';

import { PictureBook } from '../components/pictureBook';

import { IProduct } from '../types/api';

import styles from '../scssStyles/product.module.scss';
import { Loader } from '../components/loader';

export const Product = () => {
  const [product, setProduct] = useState<IProduct | null>();

  const formQueries = useTypeSelector((state) => state.formReducer);
  const { data, isLoading, isError, isSuccess } = booksApi.useGetBooksQuery(formQueries);
  const { id } = useParams();

  const classNameContainer = `container ${styles['product__container']}`;

  useEffect(() => {
    data?.items.forEach((item: IProduct) => {
      if (item.id === id) {
        setProduct(item);
      }
    });
  }, [isSuccess]);

  return (
    <main>
      <section className="section product">
        <div className={classNameContainer}>
          {product && !isLoading && !isError && (
            <>
              <div className={styles['product__img-container']}>
                <PictureBook size="lg" url={`${product.volumeInfo.imageLinks.thumbnail}`} />
              </div>
              <div className={styles['product__card-container']}>
                <p className={styles['product__card-category']}>
                  {product.volumeInfo.categories?.length
                    ? product.volumeInfo.categories.join('/')
                    : 'Not category'}
                </p>
                <p className={styles['product__card-name']}>{product.volumeInfo.title}</p>
                <p className={styles['product__card-author']}>
                  {product.volumeInfo.authors?.length
                    ? product.volumeInfo.authors?.join(', ')
                    : 'Not author'}
                </p>
                <div className={styles['product__card-description']}>
                  <p className={styles['product__card-description-text']}>
                    {product.volumeInfo.description
                      ? product.volumeInfo.description
                      : 'Not description'}
                  </p>
                </div>
              </div>
            </>
          )}
          {isLoading && <Loader size="lg" />}
          {isError && <p>Ошибка</p>}
        </div>
      </section>
    </main>
  );
};
