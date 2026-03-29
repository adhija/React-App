import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

const BookingCart = () => {

  const {
    bookings,
    removeBooking
  } = useContext(BookingContext);

  const totalAmount =
    bookings.reduce(
      (sum, movie) =>
        sum +
        movie.price *
        movie.quantity,
      0
    );

  return (
    <div className="cart-container">

      <h2>Your Bookings</h2>

      {bookings.length === 0 &&
        <p className="empty">
          No tickets booked 🎟
        </p>
      }

      {bookings.map(
        (movie, index) => (

          <div
            key={index}
            className="cart-row"
          >

            <span>
              {movie.title}
            </span>

            <span>
              Qty: {movie.quantity}
            </span>

            <span>
              ₹
              {movie.price *
               movie.quantity}
            </span>

            <button
              onClick={() =>
                removeBooking(index)
              }
            >
              Remove
            </button>

          </div>

        )
      )}

      <div className="total">

        Total Amount:
        ₹{totalAmount}

      </div>

    </div>
  );
};

export default BookingCart;