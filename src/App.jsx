import { useState, useEffect, useMemo } from 'react';
import { useProducts } from './hooks/useProducts';
import { getCategories } from './services/api';
import ProductList from './components/ProductList/ProductList';
import SearchBar from './components/SearchBar/SearchBar';
import FilterBar from './components/FilterBar/FilterBar';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
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

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;

  return (
    <div className="App">
      <Navbar cartCount={cartItems.length} />
      <div className="App__controls">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />
      </div>
      <div className="App__body">
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        <Cart items={cartItems} onRemove={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default App;