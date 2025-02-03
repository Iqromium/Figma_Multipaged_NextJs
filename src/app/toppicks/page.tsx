"use client";
import Image from 'next/image'; // Import the Image component

export default function TopPicks() {
  // Sample top-rated movie data
  const movies = [
    { id: 1, title: 'The Walking Dead', image: '/images/top/tr1.png', price: '$19.5', description: 'When Zombies Come to Life...'},
    { id: 2, title: 'Friday The 13TH', image: '/images/top/tr2.png', price: '$19.5', description: 'Enter Crystal Lake if you Dare...'},
    { id: 3, title: 'The Shining', image: '/images/top/tr3.png', price: '$19.5', description: 'A Hotel you Cant Forget...'},
    { id: 4, title: 'The Final Destination', image: '/images/top/tr4.png', price: '$19.5', description: 'Accidents? or Fate’s Craftsmanship?...'},
    { id: 5, title: 'Ju-On: The Grudge', image: '/images/top/ju.png', price: '$19.5', description: 'Watch out if Fiction becomes Reality...'},
    { id: 6, title: 'Psycho (1960)', image: '/images/top/psy.png', price: '$19.5', description: 'Visit Bates Motel, at Your Own Cost...'},
  ];

  // Function to handle button click
  const handleScream = (movieId: number) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    console.log(`Screaming for: ${selectedMovie?.title}`);
    alert(`Let's scream for: ${selectedMovie?.title}! 🎬`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Top Rated Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
              {/* Movie Image */}
              <div className="w-full h-64 flex justify-center items-center relative ">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-contain"
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

              {/* "Let's scream..." Button */}
              <div className="p-4">
                <button
                  onClick={() => handleScream(movie.id)}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Let's scream...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}