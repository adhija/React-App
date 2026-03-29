import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {
  BookingProvider
} from "./context/BookingContext";

import "./styles/style.css";

function App() {

  return (

    <BookingProvider>

      <BrowserRouter>

        <Header />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

        </Routes>

      </BrowserRouter>

    </BookingProvider>

  );
}

export default App;