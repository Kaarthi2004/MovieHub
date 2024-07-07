import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <form class="flex items-center max-w-lg mx-auto">
          <div class="relative w-full">
              <input type="text" id="form-control" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the Movie Name to Search" required />
          </div>
      </form>
    </div>
  )
}

export default SearchBar
