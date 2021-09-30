import "./styles.css";
import { useState } from "react";

const myMovies = {
  horror: [
    {
      title: "Insidious",
      rating: "4/5",
      description:
        "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further. A gripping story of a family in search of help for their son, Dalton, who fell into a coma after a mysterious incident in the attic"
    },
    {
      title: "The Nun",
      rating: "3.5/5",
      description:
        "The plot follows a Roman Catholic priest and a nun in her novitiate as they uncover an unholy secret in 1952 Romania."
    },
    {
      title: "The Conjuring",
      rating: "4/5",
      description:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
    }
  ],
  adventure: [
    {
      title: "The Jungle Book",
      rating: "4.5/5",
      description:
        "Neel Sethi plays Mowgli, an orphaned human boy who, guided by his animal guardians, sets out on a journey of self-discovery while evading the threatening Shere Khan."
    },
    {
      title: "Tarzen",
      rating: "4/5",
      description:
        "The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan. He then finds out that he's human."
    },
    {
      title: "Jumanji",
      rating: "3.9/4",
      description:
        "Jumanji, one of the most unique--and dangerous--board games ever, falls into the hands of the curious teen, Alan Parrish, in 1969. Mysterious and magical, the game strands the unsuspecting boy in the lush, savage forests of a mythical realm."
    }
  ],
  historical: [
    {
      title: "World War II",
      rating: "4.3/5",
      description:
        "Based on Paul Brickhill's nonfiction book of the same name (but done so with great fictitious liberty),The film has since become a classic in cinema history, especially for, as one might guess, its chase scenes"
    },
    {
      title: "Gandhi",
      rating: "4/5",
      description:
        "Gandhi, British-Indian historical film, released in 1982, that tells the story of Mahatma Gandhi and his struggle to win independence for India through nonviolent civil disobedience."
    },
    {
      title: "War and Peace",
      rating: "3.8/5",
      description:
        "In the years leading to Napoleon's invasion, members of the Russian aristocracy face a myriad of personal tragedies. After his father dies, Count Pierre Bezukhov (Henry Fonda), a friend of Prince Andrei Bolkonsky (Mel Ferrer), receives a substantial inheritance."
    }
  ],
  fiction: [
    {
      title: "The Tomorrow War",
      rating: "4/5",
      description:
        "The film was described as a dark and emotional sci-fi action epic about a generation of people who get drafted to go 30 years in the future to fight a losing war against aliens."
    },
    {
      title: "Justice League",
      rating: "4.3/5",
      description:
        "Justice League is a 2017 American superhero film based on the DC Comics superhero team of the same name."
    },
    {
      title: "Gravity",
      rating: "5/5",
      description:
        " It stars Sandra Bullock and George Clooney as American astronauts who are stranded in space after the mid-orbit destruction of their Space Shuttle, and attempt to return to Earth"
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
            <p>
              Description: <br />
              <br />
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
