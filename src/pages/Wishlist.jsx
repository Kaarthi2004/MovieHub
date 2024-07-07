import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Wishlist = () => {
  const [movieName, setMovieName] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [toWatchMovies, setToWatchMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/search', { moviename: movieName });
      if (response.data.message) {
        setErrorMessage(response.data.message);
        setMovieDetails(null);
      } else {
        setMovieDetails(response.data);
        setErrorMessage('');
        fetchToWatchMovies(); // Update the ToWatch list after adding a new movie
      }
    } catch (error) {
      console.error('Error searching for movie:', error);
    }
  };

  const fetchToWatchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/towatch');
      setToWatchMovies(response.data);
    } catch (error) {
      console.error('Error fetching to watch movies:', error);
    }
  };

  const handleUpdate = async (id) => {
    // Implement the update functionality
    const newRating = prompt("Enter the new rating:");
    if (newRating) {
      try {
        await axios.put(`http://localhost:5000/towatch/${id}`, { rating: newRating });
        fetchToWatchMovies();
      } catch (error) {
        console.error('Error updating movie:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/towatch/${id}`);
      fetchToWatchMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  useEffect(() => {
    fetchToWatchMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <br /><br /><br />
      <form className="flex items-center max-w-lg mx-auto" onSubmit={handleSearch}>
        <div className="relative w-full">
          <input
            type="text"
            id="form-control"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the Movie Name to Search"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2">
          Search
        </button>
      </form>
      {movieDetails && (
        <div className="mt-4 max-w-lg mx-auto bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">{movieDetails.moviename}</h2>
          <p>{movieDetails.storyline}</p>
          <p>Rating: {movieDetails.rating}</p>
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 max-w-lg mx-auto bg-red-100 p-4 rounded-lg shadow">
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">My Watchlist</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Movie Name</th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Storyline</th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Rating</th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Update</th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {toWatchMovies.map((movie, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 text-gray-700">{movie.moviename}</td>
                  <td className="py-2 px-4 text-gray-700">{movie.storyline}</td>
                  <td className="py-2 px-4 text-gray-700">{movie.rating}</td>
                  <td className="py-2 px-4 text-gray-700">
                    <button
                      onClick={() => handleUpdate(movie._id)}
                      className="bg-yellow-500 text-white rounded-lg px-4 py-2"
                    >
                      Update
                    </button>
                  </td>
                  <td className="py-2 px-4 text-gray-700">
                    <button
                      onClick={() => handleDelete(movie._id)}
                      className="bg-red-500 text-white rounded-lg px-4 py-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
