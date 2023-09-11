import { Link } from 'react-router-dom';
import styles from '../../scssStyles/catalog.module.scss';
import { IProduct } from '../../types/api';
import { PictureBook } from '../pictureBook';

export const CatalogItem = ({ product }: { product: IProduct }) => {
  return (
    <li className={styles.catalog__item}>
      <Link to={`product/${product.id}`} className={styles['catalog__item-link']}>
        Ссылка
      </Link>
      {/* <img className={styles['catalog__item-img']} src="" alt="book" /> */}
      <PictureBook size="sm" url={`${product.volumeInfo.imageLinks.thumbnail}`} />
      <p className={styles['catalog__item-category']}>{`${
        product.volumeInfo.categories ? product.volumeInfo.categories[0] : 'Not category'
      }`}</p>
      <p className={styles['catalog__item-name']}>{product.volumeInfo.title}</p>
      <p className={styles['catalog__item-author']}>
        {product.volumeInfo.authors?.length ? product.volumeInfo.authors?.join(', ') : 'Not Author'}
      </p>
    </li>
  );
};
