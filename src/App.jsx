import { useState, useEffect, useMemo } from 'react';
import { useProducts } from './hooks/useProducts';
import { getCategories } from './services/api';
import ProductList from './components/ProductList/ProductList';
import SearchBar from './components/SearchBar/SearchBar';
import FilterBar from './components/FilterBar/FilterBar';
import './App.css';

function App() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => (category ? p.category === category : true));
  }, [products, search, category]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;

  return (
    <div className="App">
      <h1>Mi E-commerce</h1>
      <div className="App__controls">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;