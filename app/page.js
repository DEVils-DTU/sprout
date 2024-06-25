import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // const [searchQuery, setSearchQuery] = ['', ''];

  // const handleSearchChange = (event) => {
  //     setSearchQuery(event.target.value);
  // };

  const loggedIn = true;

  return (
    <div className='
    h-full w-full rounded-2xl flex flex-col
    items-center justify-start
    p-[2%]'>

      {/* SEARCHBAR WITH LOGIN */}
      {/* <div className={`
                  w-[100%] h-[20%]
                  bg-white
                  flex items-center justify-between     
                  p-3
          `}>
        <div className='flex justify-start items-center h-[60%] border-[#285A43] border-4 w-[60%] rounded-full p-2 px-5 gap-5 '>
          <FontAwesomeIcon icon={faSearch} className="text-black h-[90%]" />
          <input type='text' placeholder='Search...' className='w-[80%] h-[90%] text-black bg-transparent border-none outline-none px-2' />
        </div>
        <FontAwesomeIcon icon={faUser} className={`text-black h-[40%] w-[10%] ml-2 ${!loggedIn ? 'hidden' : ''}`} />
        <Link href='/' className={`text-white font-bold rounded-2xl p-3 bg-[#285A43] ${loggedIn ? 'hidden' : ''}`}>Login/Signup</Link>
      </div> */}

      {/* BANNER */}
      <img src='/banner.png' alt='banner' className='pb-10' />

      {/* ABOUT */}
      <img src='/homeAbout.png' alt='logo' className='h-1/2' />
    </div >
  );
}
