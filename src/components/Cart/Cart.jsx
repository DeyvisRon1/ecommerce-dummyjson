import './Cart.css';

function Cart({ items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart__list">
            {items.map((item, index) => (
              <li key={index} className="cart__item">
                <span>{item.title}</span>
                <span>${item.price}</span>
                <button onClick={() => onRemove(index)}>✕</button>
              </li>
            ))}
          </ul>
          <p className="cart__total">Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default Cart;