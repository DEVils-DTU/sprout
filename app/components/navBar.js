'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const NavBar = () => {

    const [currPage, setPage] = useState('Home');

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Convergence&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <nav className='w-1/3 lg:w-1/4 bg-transparent flex flex-col text-black items-center rounded-3xl'>
            <Link href="/" className='w-[90%] md:w-[80%] lg:w-[70%]  flex justify-center items-center gap-2 
                m-10 mb-3 p-3 
                bg-white 
                rounded-2xl'>
                <img src='/logo.png' className=' w-1/6' />
                <h1 className='
                    w-5/6  
                    text-[50%] sm:text-[70%] md:text-[90%] lg:text-[100%]
                    font-bold font-convergence 
                    text-black'>S P R O U T™</h1>
            </Link>
            <ul className='w-full flex flex-col justify-center items-center '>
                <Link href="/" className='w-[90%] md:w-[80%] lg:w-[70%]'><li className={`
                    flex 
                    items-center 
                    gap-5 
                    p-3     
                    px-5 
                    mt-5 
                    mb-3     
                    ${(currPage == 'Home') ? 'bg-white text-[#285A43]' : 'bg-transparent text-white'} 
                    hover:bg-white 
                    hover:text-[#285A43]
                    transition-colors
                    duration-500 
                    rounded-2xl 
                    text-[70%] md:text-[90%] lg:text-[100%]
                    font-poppins`}
                    onClick={() => { setPage("Home") }}>
                    Home
                </li></Link>
                <Link href="/Listings" className='w-[90%] md:w-[80%] lg:w-[70%]'>
                    <li className={`
                    
                    text-[70%] md:text-[90%] lg:text-[100%]
                    flex 
                    items-center 
                    gap-5 
                    p-3 
                    px-5 
                    mb-3 
                    ${(currPage == 'Listings') ? 'bg-white text-[#285A43]' : 'bg-transparent text-white'} 
                    hover:bg-white 
                    hover:text-[#285A43] 
                    transition-colors
                    duration-500
                    rounded-2xl 
                    font-poppins`}
                        onClick={() => { setPage("Listings") }}>
                        Projects
                    </li></Link>

                <Link href="/CreatePost" className='w-[90%] md:w-[80%] lg:w-[70%]'>
                    <li className={`
                    
                    text-[70%] md:text-[90%] lg:text-[100%]
                    flex 
                    items-center 
                    gap-5 
                    p-3 
                    px-5 
                    mb-3 
                    ${(currPage == 'CreatePost') ? 'bg-white text-[#285A43]' : 'bg-transparent text-white'} 
                    hover:bg-white 
                    hover:text-[#285A43] 
                    transition-colors
                    duration-500
                    rounded-2xl 
                    font-poppins`}
                        onClick={() => { setPage("CreatePost") }}>
                        List A Project
                    </li></Link>

                <Link href="/LoginPage" className='w-[90%] md:w-[80%] lg:w-[70%]'><li className={`
                    text-[70%] md:text-[90%] lg:text-[100%]
                    flex 
                    items-center 
                    gap-5 
                    p-3 
                    px-5 
                    ${(currPage == 'Account') ? 'bg-white text-[#285A43]' : 'bg-transparent text-white'} 
                    hover:bg-white 
                    hover:text-[#285A43] 
                    transition-colors
                    duration-500
                    rounded-2xl 
                    font-poppins`
                }
                    onClick={() => { setPage("Account") }}
                >
                    Account
                </li></Link>
                {/* <li className='w-[60%] flex items-center gap-5 p-3 px-5 bg-white rounded-2xl font-poppins'>Team DEVils</li> */}
            </ul>
        </nav>
        // <nav className="fixed top-0 left-0 w-64 h-screen bg-gray-800 p-4 pt-8">
        //     <ul className="flex flex-col">
        //         <li className="mb-4">
        //             {/* <Link href="/"> */}
        //             <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
        //                 Home
        //             </a>
        //             {/* </Link> */}
        //         </li>
        //         <li className="mb-4">
        //             {/* <Link href="/delivery"> */}
        //             <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
        //                 Delivery
        //             </a>
        //             {/* </Link> */}
        //         </li>
        //         <li className="mb-4">
        //             {/* <Link href="/pickup"> */}
        //             <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
        //                 Pickup
        //             </a>
        //             {/* </Link> */}
        //         </li>
        //         <li className="mb-4">
        //             {/* <Link href="/catalog"> */}
        //             <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
        //                 Catalog
        //             </a>
        //             {/* </Link> */}
        //         </li>
        //         <li className="mb-4">
        //             {/* <Link href="/cart"> */}
        //             <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
        //                 Cart
        //             </a>
        //             {/* </Link> */}
        //         </li>
        //     </ul>
        // </nav>
    )
}

export default NavBar