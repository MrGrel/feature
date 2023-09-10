import { useEffect, useState } from 'react';
import { fetchImg } from '../api/productApi';
import { Loader } from './loader';

interface IImage {
  size: 'sm' | 'lg';
  url: string;
}

export const PictureBook = ({ size, url }: IImage) => {
  const [blob, setBlob] = useState<Blob>();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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
    <>
      {blob && !loading && !error && <img src={`${blob}`} alt="Cover" />}
      {loading && <Loader size={size} />}
      {error && <p>Ошибка</p>}
    </>
  );
};
