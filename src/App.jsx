import { useProducts } from './hooks/useProducts';
import ProductList from './components/ProductList/ProductList';
import './App.css';

function App() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;

  return (
    <div className="App">
      <h1>Mi E-commerce</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;