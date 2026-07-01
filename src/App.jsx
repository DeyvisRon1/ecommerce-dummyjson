import { useProducts } from './hooks/useProducts';
import './App.css';

function App() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;

  return (
    <div className="App">
      <h1>Mi E-commerce</h1>
      <p>Productos cargados: {products.length}</p>
    </div>
  );
}

export default App;