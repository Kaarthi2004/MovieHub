import React from 'react';
import ListCreation from './ListCreation';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div>
      <Navbar/>
      <br /><br /><br /><br /><br />
      <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"><Link to="/pages/ListCreation">Add a new list</Link></button>
    </div>
  );
}

export default Wishlist;
