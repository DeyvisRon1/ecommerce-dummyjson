import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;