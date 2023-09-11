import { useState, useEffect } from 'react';
import styles from '../scssStyles/components/buttonToUp.module.scss';

export const ButtonToUp = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const classNameBtn = isVisible ? styles['btn-to-up'] : styles['btn-unvisible'];

  const handleClickToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const funScrollY = () => {
      if (window.scrollY > 250 && isVisible === false) {
        setIsVisible(true);
      } else if (window.scrollY < 250 && isVisible === true) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', funScrollY);

    return () => window.removeEventListener('scroll', funScrollY);
  });

  return (
    <button className={classNameBtn} onClick={handleClickToUp}>
      Наверх
    </button>
  );
};
