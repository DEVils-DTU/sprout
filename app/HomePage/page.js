import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

const loggedIn = true;

const HomePage = () => {
    // const [searchQuery, setSearchQuery] = ['', ''];

    // const handleSearchChange = (event) => {
    //     setSearchQuery(event.target.value);
    // };

    return (
        <div className={`
            w-[96%] h-[96vh] 
            bg-white 
            rounded-2xl 
            mx-[2%] my-[2vh] 
            flex flex-col
            items-center justify-start
            p-[2%]
        `}>
            <div className={`
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
            </div>
        </div>
    )
}

export default HomePage