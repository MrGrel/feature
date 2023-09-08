export const Product = () => {
  return (
    <main>
      <section className="section product">
        <div className="container">
          <img className="product__img" src="" alt="Продукт" />
          <div className="product__container">
            <p className="product__category-text">Категория</p>
            <p className="product__name-text">Название</p>
            <p className="product__author-text">Автор</p>
            <div className="product__description-container">
              <p className="product__description-text">Описание</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
