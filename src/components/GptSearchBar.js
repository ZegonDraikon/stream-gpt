import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
const GptSearchBar = () => {

  const langKey = useSelector(store=>store.config.lang);
  const searchText = useRef(null);


  return (
    <div className="pt-[10%] md:pt-[10%] flex justify-center">
       <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
       <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
         <button className='col-span-3 m-4 py-2 px-4 bg-yellow-600 text-white rounded-lg'>
          {lang[langKey].search}
         </button>
      
      </form>
    </div>
  )
}

export default GptSearchBar
