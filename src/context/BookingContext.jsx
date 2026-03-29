import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  // Save bookings in localStorage
  useEffect(() => {
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  }, [bookings]);

  // Add Booking
  const addBooking = (movie, quantity) => {

    const newBooking = {
      ...movie,
      quantity
    };

    setBookings([...bookings, newBooking]);
  };

  // Remove Booking
  const removeBooking = (index) => {

    const updatedBookings =
      bookings.filter((_, i) => i !== index);

    setBookings(updatedBookings);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        removeBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};