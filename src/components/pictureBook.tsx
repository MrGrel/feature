import { useEffect, useState } from 'react';
import { fetchImg } from '../api/productApi';

interface IImage {
  size: string;
  url: string;
}

export const AvatarBook = ({ size, url }: IImage) => {
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

  return <img src="" alt="" />;
};
