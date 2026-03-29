import { useState, useContext } from "react";
import { BookingContext } from "../context/BookingContext";

const MovieCard = ({ movie }) => {

  const [quantity, setQuantity] =
    useState(1);

  const { addBooking } =
    useContext(BookingContext);

  return (
    <div className="movie-card">

      <img
        src={movie.image}
        alt={movie.title}
      />

      <div className="movie-info">

        <h3>{movie.title}</h3>

        <p className="price">
          ₹{movie.price}
        </p>

        <div className="booking-controls">

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(
                Number(e.target.value)
              )
            }
          />

          <button
            onClick={() =>
              addBooking(movie, quantity)
            }
          >
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default MovieCard;