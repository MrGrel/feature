import styles from '../scssStyles/components/loader.module.scss';
interface ISize {
  size: 'sm' | 'lg';
}

export const Loader = ({ size }: ISize) => {
  const classContainer =
    size === 'sm' ? styles['loader-sm__container'] : styles['loader-lg__container'];
  const classLoader = size === 'sm' ? styles['loader-sm'] : styles['loader-lg'];

  return (
    <div className={classContainer}>
      <p className={classLoader}></p>
    </div>
  );
};
