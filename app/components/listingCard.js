'use client'
import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';

const ListingCard = () => {

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className=' text-black flex flex-col rounded-3xl bg-white w-[25%] min-w-64 h-fit drop-shadow-lg m-5 '>
            <img src='https://via.placeholder.com/150' className='w-full h-[55%] rounded-t-3xl' />
            <div className='flex flex-col gap-2 m-5 mt-2'>
                <div className='text-[90%] font-lato font-bold'>Product Name</div>
                <div className='text-[80%] font-lato'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</div>
                <div className='text-[80%] font-lato font-bold'>Quoted Price: 1100$</div>
                <Link href='/' className='text-[90%] font-lato font-bold py-2 px-5 border-2 border-green-900 bg-green-50 w-fit rounded-lg'>Quote a Price</Link>
            </div>
        </div>
    )
}

export default ListingCard