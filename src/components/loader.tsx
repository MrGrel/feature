import styles from '../scssStyles/components/loader.module.scss';
interface ISize {
  size: 'sm' | 'lg';
}

export const Loader = ({ size }: ISize) => {
  const classLoader = size === 'sm' ? styles['loader-sm'] : styles['loader-lg'];

  return <p className={classLoader}></p>;
};
