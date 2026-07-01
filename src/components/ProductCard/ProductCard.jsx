import './ProductCard.css';

function ProductCard({ product }) {
  const { title, price, thumbnail, rating, category } = product;

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-card__image" />
      <span className="product-card__category">{category}</span>
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__price">${price}</p>
      <p className="product-card__rating">⭐ {rating}</p>
    </div>
  );
}

export default ProductCard;