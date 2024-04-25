import React from 'react';
import { useState } from 'react';


const Navbar = () => {

    // create state variable
    const [toggler, setToggler] = useState(false)

    return (
        <nav className='absolute z-50 w-full left-0 top-0 right-0'>
            {/* Container */}
            <div className='flex flex-row w-full bg-black justify-between items-start py-4 px-2 text-white font-oxygen'>
                {/* Col 1 */}
                <div className={`flex ${toggler ? 'flex-col' : 'flex-row'} justify-start gap-5`}>
                    <div className='text-3xl font-bold hover:text-alloy-orange'>
                        <a href='/profile'>Gainz</a>
                    </div>
                    
                    <ul className={`list-none ${toggler ? 'flex' : 'hidden'} md:flex md:flex-row flex-col gap-4 justify-center items-center`}>
                        <li>
                            <a href='/profile' className='no-underline hover:text-alloy-orange'>Home</a>
                        </li>
                        <li>
                            <a href='/about' className='no-underline hover:text-alloy-orange'>About</a>
                        </li>
                    </ul>
                 
                    {/* <div className=''>
                        <a href="/register" className="pr-3 hover:text-alloy-orange">REGISTER</a>
                        <a href="/login" className="border border-alloy-orange rounded-2xl px-4 py-2 hover:text-alloy-orange">LOGIN</a>
                    </div> */}
                </div>
                <div onClick={() => setToggler(!toggler)} className='md:hidden flex'>
                    <i className="fa-solid fa-bars fa-2x hover:border hover:border-white p-1 rounded-xl hover:cursor-pointer"></i>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar