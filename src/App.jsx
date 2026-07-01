import { useState, useEffect, useMemo } from 'react';
import { useProducts } from './hooks/useProducts';
import { getCategories } from './services/api';
import ProductList from './components/ProductList/ProductList';
import SearchBar from './components/SearchBar/SearchBar';
import FilterBar from './components/FilterBar/FilterBar';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => (category ? p.category === category : true));
  }, [products, search, category]);

  function handleAddToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  function handleRemoveFromCart(index) {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <Header cartCount={cartItems.length} />
      <div className="App__controls">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <div className="App__body">
          <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
          <Cart items={cartItems} onRemove={handleRemoveFromCart} />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;