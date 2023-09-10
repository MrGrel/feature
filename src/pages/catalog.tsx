import { CatalogItem } from '../components/catalog/catalogItem';
import { booksApi } from '../store/reducers/booksApi';

import styles from '../scssStyles/catalog.module.scss';
import { useTypeSelector } from '../hooks/redux';

export const Catalog = () => {
  const formQueries = useTypeSelector((state) => state.formReducer);
  const { data, isLoading, isError } = booksApi.useGetBooksQuery(formQueries);
  return (
    <main className="main">
      <section className={styles.catalog}>
        <div className="container">
          {isLoading && <h1>загрузка </h1>}
          {isError && <p>{isError}</p>}
          {data && !isLoading && !isError && (
            <>
              <p className={styles.found}>{data.totalItems}</p>
              <ul className={styles.catalog__list}>
                {data?.items && data.items.map((product) => <CatalogItem product={product} />)}
              </ul>
              <ul className={styles.catalog__list}></ul>
              <button className="catalog__btn">Поазать больше</button>
            </>
          )}
        </div>
      </section>
    </main>
  );
};
