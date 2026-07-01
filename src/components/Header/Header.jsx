import './Header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <span className="header__logo">Mi E-commerce Deyvis Salas</span>
      <span className="header__cart">🛒 {cartCount}</span>
    </header>
  );
}

export default Header;