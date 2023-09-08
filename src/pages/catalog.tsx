import { Link } from "react-router-dom";

export const Catalog = () => {
  return (
    <main className="main">
      <section className="section catalog">
        <div className="container">
          <p className="catalog__found-text">443 founds</p>
          <ul className="catalog__list">
            <li className="catalog__item">
              <Link to="product/1" className="catalog__item-link" />
              <img className="catalog__item-img" src="" alt="book" />
              <p className="catalog__item-categories">Категория</p>
              <p className="catalog__item-name">Название книги</p>
              <p className="catalog__item-author">Автор</p>
            </li>
          </ul>
          <button className="catalog__btn">Поазать больше</button>
        </div>
      </section>
    </main>
  );
};
