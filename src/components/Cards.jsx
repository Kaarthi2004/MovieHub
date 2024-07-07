import React from 'react';
import axios from 'axios';

const Card = ({ image, moviename, rating, addToWishlist }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 h-56 w-full rounded-t-lg" src={image} alt={moviename} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{moviename}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800 ms-3">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-1xl font-bold text-gray-900 dark:text-white">Movie</span>
          <button
            onClick={() => addToWishlist(moviename)}
            className="text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    { image: "https://s2.dmcdn.net/v/TlcYf1YCZVopWJl31/x1080", moviename: "The Shawshank Redemption", rating: "9.3"},
    { image: "https://cms-article.forbesindia.com/media/images/2022/Mar/img_180781_thegodfatherposter.jpg", moviename: "The Godfather", rating: "9.2"},
    { image: "https://i.ytimg.com/vi/1cK1pcQyzg0/sddefault.jpg", moviename: "The Dark Knight", rating: "9.0" },
    { image: "https://s1.dmcdn.net/v/VPo1g1bLR9X3RfLPs/x1080", moviename: "12 Angry Men", rating: "9.0"},
    { image: "https://i.ytimg.com/vi/mxphAlJID9U/mqdefault.jpg", moviename: "Schindler's List", rating: "9.0"},
    { image: "https://i.scdn.co/image/ab67616d0000b27301003bf641243fcc56944428", moviename: "The Lord of the Rings", rating: "9.0"},
    { image: "https://facts.net/wp-content/uploads/2024/01/18-pulp-fiction-fun-facts-1706572868.jpg", moviename: "Pulp Fiction", rating: "8.9"},
    { image: "https://i0.wp.com/spirossoutsos.com/wp-content/uploads/2016/01/good_bad_ugly_poster_clint_eastwood_paitning_leone.jpg?fit=950%2C761&ssl=1", moviename: "The Good, the Bad and the Ugly", rating: "8.8"},
    { image: "https://m.media-amazon.com/images/S/pv-target-images/ef2965a749354be9817a3a5beb6f667e93106d7456c6633ec5d9a76c171f87e7.jpg", moviename: "Fight Club", rating: "8.8"},
    { image: "https://m.media-amazon.com/images/S/pv-target-images/28ad5a615d61071e9d1aebbf684c89fcc3a8c5b3528d8ba778bb13198764d840.jpg", moviename: "Forrest Gump", rating: "8.8"},
    { image: "https://miro.medium.com/v2/resize:fit:500/1*WqEQPJE5BUGRvDMuL4OWtw.jpeg", moviename: "Inception", rating: "8.8"},
    { image: "https://miro.medium.com/v2/resize:fit:1400/0*eb0v8gYdBVvwwOiG.jpg", moviename: "The Matrix", rating: "8.7"},
  ];

  const addToWishlist = async (moviename) => {
    try {
      const response = await axios.post('http://localhost:5000/search', { moviename });
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert(`${moviename} added to your wishlist.`);
      }
    } catch (error) {
      console.error('Error adding movie to wishlist:', error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <br /><br /><br /><br /><br />
      <p className="text-center text-purple-800 font-semibold leading-relaxed text-3xl dark:text-gray-400 mb-8">Explore the World of Cinema</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} addToWishlist={addToWishlist} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
