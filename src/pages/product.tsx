import styles from './product.module.scss';

export const Product = () => {
  return (
    <main>
      <section className="section product">
        <div className="container flex">
          <div className={styles['product__img-container']}>
            <img className={styles['product__img']} src="" alt="Продукт" />
          </div>
          <div className={styles['product__container']}>
            <p className={styles['product__category']}>Категория</p>
            <p className={styles['product__name']}>Название</p>
            <p className={styles['product__author']}>Автор</p>
            <div className={styles['product__description']}>
              <p className={styles['product__description-text']}>Описание</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
