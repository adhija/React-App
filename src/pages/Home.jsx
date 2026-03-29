import MovieList from "../components/MovieList";
import Hero from "../components/Hero";

const Home = () => {

  const movies = [

    {
      id: 1,
      title: "Avengers",
      price: 300,
      image:
"https://m.media-amazon.com/images/I/81ExhpBEbHL.jpg"
    },

    {
      id: 2,
      title: "Batman",
      price: 250,
      image:
"https://m.media-amazon.com/images/I/71niXI3lxlL.jpg"
    },

    {
      id: 3,
      title: "human",
      price: 200,
      image:
"https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg"
    },

    {
      id: 4,
      title: "Inception",
      price: 280,
      image:
"https://m.media-amazon.com/images/I/91Rc8cAmnAL.jpg"
    }

  ];

  return (
    <>
      <Hero />

      <h2 className="section-title">
        Now Showing
      </h2>

      <MovieList movies={movies} />
    </>
  );
};

export default Home;