import { useForm } from 'react-hook-form';
import { Outlet, useNavigate } from 'react-router';

import { bookSlice } from '../../store/reducers/formSlice';
import { booksApi } from '../../store/reducers/booksApi';
import { useTypeDispatch } from '../../hooks/redux';

import { IFormQuery } from '../../types/components';

import { searchSvg } from '../../assets/svg';

import styles from '../../scssStyles/header.module.scss';

export const Header = () => {
  const { handleSubmit, register } = useForm<IFormQuery>();
  const { setFormQueries } = bookSlice.actions;
  const dispatch = useTypeDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: IFormQuery) => {
    dispatch(setFormQueries(data));
    dispatch(booksApi.util.resetApiState());
    navigate('/catalog');
  };

  return (
    <>
      <header className={styles['header']}>
        <div className="container">
          <div className={styles['header__container']}>
            <h1 className={styles['header__title']}>Search for books</h1>
            <form className={styles['header__form']} onSubmit={handleSubmit(onSubmit)}>
              <label className={styles['header__form-search-label']}>
                <input
                  className={styles['header__form-search-input']}
                  type="text"
                  {...register('search')}
                />
                <button type="submit" className={styles['header__form-submit']}>
                  {searchSvg}
                </button>
              </label>
              <div className={styles['header__form-container']}>
                <label className={styles['header__form-label']}>
                  <p className={styles['header__form-label-text']}>Categories</p>
                  <select className={styles['header__form-select']} {...register('category')}>
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                  </select>
                </label>
                <label className={styles['header__form-label']}>
                  <p className={styles['header__form-label-text']}>Sorting by</p>
                  <select className={styles['header__form-select']} {...register('order')}>
                    <option value="relevance">relevance</option>
                    <option value="newst">newst</option>
                  </select>
                </label>
              </div>
            </form>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
