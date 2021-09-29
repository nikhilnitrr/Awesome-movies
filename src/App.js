import "./styles.css";
import { useState } from "react";

const myMovies = {
  horror: [
    {
      title: "Insidious",
      rating: "4/5"
    },
    {
      title: "The Nun",
      rating: "3.5/5"
    },
    {
      title: "The Conjuring",
      rating: "4/5"
    }
  ],
  adventure: [
    {
      title: "The Jungle Book",
      rating: "4.5/5"
    },
    {
      title: "Tarzen",
      rating: "4/5"
    },
    {
      title: "Jumanji",
      rating: "3.9/4"
    }
  ],
  historical: [
    {
      title: "World War II",
      rating: "4.3/5"
    },
    {
      title: "Gandhi",
      rating: "4/5"
    },
    {
      title: "War and Peace",
      rating: "3.8/5"
    }
  ],
  fiction: [
    {
      title: "The Tomorrow War",
      rating: "4/5"
    },
    {
      title: "Justice League",
      rating: "4.3/5"
    },
    {
      title: "Gravity",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var [movie, setMovie] = useState([]);

  function horrorMoviesHandler() {
    var myList = [];
    for (let i = 0; i < myMovies.horror.length; i++) {
      myList.push(myMovies.horror[i]);
    }
    setMovie(myList);
  }

  function adventureMoviesHandler() {
    var myList = [];
    for (let i = 0; i < myMovies.adventure.length; i++) {
      myList.push(myMovies.adventure[i]);
    }
    setMovie(myList);
  }

  function historicalMoviesHandler() {
    var myList = [];
    for (let i = 0; i < myMovies.historical.length; i++) {
      myList.push(myMovies.historical[i]);
    }
    setMovie(myList);
  }

  function fictionMoviesHandler() {
    var myList = [];
    for (let i = 0; i < myMovies.fiction.length; i++) {
      myList.push(myMovies.fiction[i]);
    }
    setMovie(myList);
  }

  return (
    <div className="App">
      <h1>
        <span id="img-camera" role="img" aria-labelledby="film">
          🎬
        </span>
        Awesome Movies
      </h1>
      <p id="heading">
        Checkout my favourite movies. Select a genre to get started
      </p>
      <button onClick={horrorMoviesHandler} className="btn-primary">
        Horror
      </button>
      <button onClick={adventureMoviesHandler} className="btn-primary">
        Adventure
      </button>
      <button onClick={historicalMoviesHandler} className="btn-primary">
        Historical
      </button>
      <button onClick={fictionMoviesHandler} className="btn-primary">
        Fiction
      </button>
      {movie.map((item) => {
        return (
          <div className="output">
            <p>{item.title}</p>
            <p>Rating : {item.rating}</p>
          </div>
        );
      })}
    </div>
  );
}
