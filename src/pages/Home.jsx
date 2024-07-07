import React from 'react'
import Navbar from '../components/Navbar'
import Carousal from '../components/Carousal'
import Gallery from '../components/Gallery';
import Cards from '../components/Cards';
import TopMovies from '../components/TopMovies';
import Footer from '../components/Footer';

const Home = () => {
    const images = [
        'https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/murgados_0_0_0.jpg?text=Slide+1',
        'https://wallpapercave.com/wp/wp9309349.jpg?text=Slide+2',
        'https://wallpapercave.com/wp/wp1946074.jpg?text=Slide+3',
    ];

  return (
    <div>
      <header className=" relative w-full h-screen overflow-hidden">
        <Navbar/>
        <Carousal images={images} />
      </header>
      
      <Gallery/>
      <Cards/>
      <TopMovies/>
      <Footer/>
    </div>
  )
}

export default Home
