"use client";
import Image from "next/image";

export default function HorrorMovies() {
  // Sample movie data
  const movies = [
    { id: 1, title: "Texas Chainsaw Massacre", image: "/images/useme/tcm.png", price: "$19.5", description: "If You are Going Out with Friends make sure You DONT stay in an Unknown Area..." },
    { id: 2, title: "Scream", image: "/images/useme/sm.png", price: "$19.5", description: "Friends can be Many but Keep an Eye Out for Danger..." },
    { id: 3, title: "KingKong", image: "/images/useme/kk.png", price: "$19.5", description: "All Animals are cute but Dont get Too Comfortable..." },
    { id: 4, title: "House-3", image: "/images/useme/h3.png", price: "$19.5", description: "If Walls had Ears is a metaphor but It Can Come to Life too?" },
    { id: 5, title: "The Invisible Man(1933)", image: "/images/useme/inv.png", price: "$19.5", description: "The Fear of the Unknown, What if it is a Human?" },
    { id: 6, title: "Halloween(1978)", image: "/images/useme/ha.png", price: "$19.5", description: "Everyone dresses up for Halloween but someone can really be a Menace under Mask..." },
    { id: 7, title: "IT(1990)", image: "/images/useme/pit.png", price: "$19.5", description: "Clowns are Funny but What if they have all the Fun with Fear?" },
    { id: 8, title: "Dead Alive(1992)", image: "/images/useme/dor.png", price: "$19.5", description: "Want to participate in a Battle of Staying Alive?" },
    { id: 9, title: "A Nightmare on Elm Street(1984)", image: "/images/useme/elm.png", price: "$19.5", description: "Nightmares do End. But what if Reality of Life Ends as a Nightmare for woke ones?" },
    { id: 10, title: "The Silence of the Lambs(1991)", image: "/images/useme/sil.png", price: "$19.5", description: "Meet Hannibal Lecter, but dont let him Meat you down..." },
    { id: 11, title: "House of Wax(2005)", image: "/images/useme/hw.png", price: "$19.5", description: "Enter the House of Wax, beware there remains a difference between those who Move and those who Dont." },
    { id: 12, title: "Dracula(1931)", image: "/images/useme/drc.png", price: "$19.5", description: "The Classic First Appearance of Dracula in 1931 to make You Hide Your Necks..." },
  ];

  // Function to handle button click
  const handleSelectMovie = (movieId: number) => {
    console.log(`Selected Movie ID: ${movieId}`);
    alert(`You selected: ${movies.find((movie) => movie.id === movieId)?.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">ALL IN YOUR HORROR!!!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
              {/* Movie Image */}
              <div className="w-full h-64 relative">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* Hover Description */}
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <p className="text-white text-center">{movie.description}</p>
              </div>

              {/* Movie Details */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 text-center">{movie.title}</h2>
                <p className="text-gray-600 text-center">{movie.price}</p>
              </div>

              {/* "This one!" Button */}
              <div className="p-4">
                <button
                  onClick={() => handleSelectMovie(movie.id)}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                  This one!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
