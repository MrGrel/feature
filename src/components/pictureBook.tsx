import { useEffect, useState } from 'react';
import { fetchImg } from '../api/productApi';
import { Loader } from './loader';
import IMG from '../assets/img';

import styles from '../scssStyles/components/img.module.scss';

interface IImage {
  size: 'sm' | 'lg';
  url: string;
}

export const PictureBook = ({ size, url }: IImage) => {
  const [blob, setBlob] = useState<Blob>();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const classNameContainer = size === 'sm' ? styles['container-sm'] : styles['container-lg'];
  const classNamePicture = size === 'sm' ? styles['img-sm'] : styles['img-lg'];

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    fetchImg(url)
      .then((blob) => setBlob(blob))
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classNameContainer}>
      {blob && !loading && !error && (
        <img className={classNamePicture} src={`${blob}`} alt="Cover" />
      )}
      {loading && <Loader size={size} />}
      {error && <img className={classNamePicture} src={IMG.coverBookError} alt="Cover" />}
    </div>
  );
};
