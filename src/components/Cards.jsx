import React from 'react'

const Card = ({ image, title, rating, price }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 h-56 w-full rounded-t-lg" src={image} alt={title} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Star rating SVGs */}
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800 ms-3">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-1xl font-bold text-gray-900 dark:text-white">Movie</span>
          <a href="#" className="text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Add to Wishlist</a>
        </div>
      </div>
    </div>
  )
}

const Cards = () => {
  const cardData = [
    { image: "https://s2.dmcdn.net/v/TlcYf1YCZVopWJl31/x1080", title: "The Shawshank Redemption", rating: "9.3", price: "19.99" },
    { image: "https://cms-article.forbesindia.com/media/images/2022/Mar/img_180781_thegodfatherposter.jpg", title: "The Godfather", rating: "9.2", price: "24.99" },
    { image: "https://i.ytimg.com/vi/1cK1pcQyzg0/sddefault.jpg", title: "The Dark Knight", rating: "9.0", price: "22.99" },
    { image: "https://s1.dmcdn.net/v/VPo1g1bLR9X3RfLPs/x1080", title: "12 Angry Men", rating: "9.0", price: "18.99" },
    { image: "https://i.ytimg.com/vi/mxphAlJID9U/mqdefault.jpg", title: "Schindler's List", rating: "9.0", price: "21.99" },
    { image: "https://i.scdn.co/image/ab67616d0000b27301003bf641243fcc56944428", title: "The Lord of the Rings", rating: "9.0", price: "29.99" },
    { image: "https://facts.net/wp-content/uploads/2024/01/18-pulp-fiction-fun-facts-1706572868.jpg", title: "Pulp Fiction", rating: "8.9", price: "23.99" },
    { image: "https://i0.wp.com/spirossoutsos.com/wp-content/uploads/2016/01/good_bad_ugly_poster_clint_eastwood_paitning_leone.jpg?fit=950%2C761&ssl=1", title: "The Good, the Bad and the Ugly", rating: "8.8", price: "20.99" },
    { image: "https://m.media-amazon.com/images/S/pv-target-images/ef2965a749354be9817a3a5beb6f667e93106d7456c6633ec5d9a76c171f87e7.jpg", title: "Fight Club", rating: "8.8", price: "22.99" },
    { image: "https://m.media-amazon.com/images/S/pv-target-images/28ad5a615d61071e9d1aebbf684c89fcc3a8c5b3528d8ba778bb13198764d840.jpg", title: "Forrest Gump", rating: "8.8", price: "19.99" },
    { image: "https://miro.medium.com/v2/resize:fit:500/1*WqEQPJE5BUGRvDMuL4OWtw.jpeg", title: "Inception", rating: "8.8", price: "24.99" },
    { image: "https://miro.medium.com/v2/resize:fit:1400/0*eb0v8gYdBVvwwOiG.jpg", title: "The Matrix", rating: "8.7", price: "21.99" },
  ];

  return (
    <div className="container mx-auto px-4">
      <br /><br /><br /><br /><br />
      <p className="text-center text-purple-800 font-semibold leading-relaxed text-3xl dark:text-gray-400 mb-8">Explore the World of Cinema</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Cards