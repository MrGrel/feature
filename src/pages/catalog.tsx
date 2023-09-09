import { Link } from 'react-router-dom';
import styles from './catalog.module.scss';

export const Catalog = () => {
  return (
    <main className="main">
      <section className={styles.catalog}>
        <div className="container">
          <p className={styles.found}>443 founds</p>
          <ul className={styles.catalog__list}>
            <li className={styles.catalog__item}>
              <Link to="product/1" className={styles['catalog__item-link']}>
                Ссылка
              </Link>
              <img className={styles['catalog__item-img']} src="" alt="book" />
              <p className={styles['catalog__item-category']}>Категория</p>
              <p className={styles['catalog__item-name']}>Название книги</p>
              <p className={styles['catalog__item-author']}>Автор</p>
            </li>
          </ul>
          <button className="catalog__btn">Поазать больше</button>
        </div>
      </section>
    </main>
  );
};
