import { useTypeDispatch, useTypeSelector } from '../hooks/redux';
import { booksApi } from '../store/reducers/booksApi';

import { Loader } from '../components/loader';
import { CatalogItem } from '../components/catalog/catalogItem';

import styles from '../scssStyles/catalog.module.scss';
import { bookSlice } from '../store/reducers/formSlice';
import { ButtonToUp } from '../components/buttonToUp';

export const Catalog = () => {
  const formQueries = useTypeSelector((state) => state.formReducer);
  const { setStartIndex } = bookSlice.actions;
  const dispatch = useTypeDispatch();

  const { data, isLoading, isError, isFetching } = booksApi.useGetBooksQuery(formQueries);

  const classNameContainer = 'container' + ' ' + styles['catalog__container'];

  const handleClickMore = () => {
    dispatch(setStartIndex(30));
  };

  return (
    <main className="main">
      <section className={styles.catalog}>
        <div className={classNameContainer}>
          {isError && <p>{isError}</p>}
          {data && !isError && (
            <>
              <p className={styles['catalog__founds']}>Найдено {data.totalItems}</p>
              <ul className={styles['catalog__list']}>
                {data?.items &&
                  data.items.map((product) => <CatalogItem product={product} key={product.id} />)}
              </ul>
            </>
          )}
          {data?.totalItems && formQueries.indexForLoads < data.totalItems && (
            <button className={styles['catalog__btn']} onClick={handleClickMore}>
              Поазать больше
              {isFetching && <Loader size="sm" />}
            </button>
          )}
          <ButtonToUp />
        </div>
      </section>
    </main>
  );
};
