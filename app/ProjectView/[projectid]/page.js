'use client'
import React from 'react'
import Link from 'next/link'


const ProjectView = ({ params }) => {

    return (
        <div className='text-black w-full h-full font-poppins p-5 flex flex-col justify-start gap-5'>


            <h1 className=' font-extrabold text-[3vw]'>Project Title id: {params.projectid}</h1>

            <div className='flex h-[60%] justify-evenly w-full'>
                <img src='../images.jpeg' className='h-full max-w-[40%]' />
                <p className='my-5 w-[50%]'>{`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`} <br /> <Link href="https://www.google.com" className='text-blue-600' target='_blank'>Presentation Link</Link> </p>

            </div>

            <div className='flex flex-col gap-2 w-full h-full items-start justify-start'>
                <h2 className='font-bold text-2xl'>Place a Quotation</h2>
                <input type='text' className='w-1/6 border-2 border-green-700 rounded-lg outline-none p-1' placeholder='10000' />
                <button className='w-fit'>Submit</button>
            </div>

        </div>
    )
}

export default ProjectView