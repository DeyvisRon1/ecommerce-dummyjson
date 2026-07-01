import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <span className="navbar__logo">Mi E-commerce</span>
      <span className="navbar__cart">🛒 {cartCount}</span>
    </nav>
  );
}

export default Navbar;