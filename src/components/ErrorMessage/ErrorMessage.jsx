import './ErrorMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <p>⚠️ Ocurrió un error al cargar los productos</p>
      <p className="error-message__detail">{message}</p>
    </div>
  );
}

export default ErrorMessage;