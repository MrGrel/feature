import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTypeSelector } from '../hooks/redux';

import { booksApi } from '../store/reducers/booksApi';

import { IProduct } from '../types/api';

import styles from '../scssStyles/product.module.scss';
import { PictureBook } from '../components/pictureBook';

export const Product = () => {
  const [product, setProduct] = useState<IProduct | null>();

  const formQueries = useTypeSelector((state) => state.formReducer);
  const { data, isLoading, isError, isSuccess } = booksApi.useGetBooksQuery(formQueries);
  const { id } = useParams();

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
        <div className="container flex">
          {product && !isLoading && !isError && (
            <>
              <PictureBook size="lg" url={`${product.volumeInfo.imageLinks.thumbnail}`} />
              <div className={styles['product__container']}>
                <p className={styles['product__category']}>
                  {product.volumeInfo.categories
                    ? product.volumeInfo.categories[0]
                    : 'Not category'}
                </p>
                <p className={styles['product__name']}>{product.volumeInfo.title}</p>
                <p className={styles['product__author']}>
                  {product.volumeInfo.authors?.length
                    ? product.volumeInfo.authors?.join(', ')
                    : 'Not author'}
                </p>
                <div className={styles['product__description']}>
                  <p className={styles['product__description-text']}>
                    {product.volumeInfo.description
                      ? product.volumeInfo.description
                      : 'Not description'}
                  </p>
                </div>
              </div>
            </>
          )}
          {isLoading && <p>Загрузка</p>}
          {isError && <p>Ошибка</p>}
        </div>
      </section>
    </main>
  );
};
