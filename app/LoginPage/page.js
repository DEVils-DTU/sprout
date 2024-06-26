import React from 'react'

const LoginPage = () => {
    return (
        <div className='h-full w-full p-4 text-black'>
            <form className='flex flex-col'>
                <label>Hive Username</label>
                <input type='text' required />
                <label>Display Name</label>
                <input type='text' required />
                <button type='submit' className='bg-black text-white'>Submit</button>
            </form>


        </div>
    )
}

export default LoginPage