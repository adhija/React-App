import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import "../styles/style.css";

const Header = () => {

  const { bookings } =
    useContext(BookingContext);

  return (
    <header className="navbar">

      <div className="logo">
        🎬 MovieZone
      </div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-btn">
          🛒 Cart ({bookings.length})
        </Link>

      </nav>

    </header>
  );
};

export default Header;