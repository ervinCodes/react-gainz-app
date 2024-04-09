import React from 'react';

const Navbar = () => {
    return (
        <nav>
            {/* Container */}
            <div className='flex flex-row w-full bg-black justify-between items-center py-4 px-2 text-white font-oxygen'>
                {/* Col 1 */}
                <ul className='list-none flex flex-row gap-4 justify-center items-center'>
                    <li className='text-3xl font-bold hover:text-alloy-orange'>
                        <a href='/profile'>Gainz</a>
                    </li>
                    <li>
                        <a href='/profile' className='no-underline hover:text-alloy-orange'>Home</a>
                    </li>
                    <li>
                        <a href='/about' className='no-underline hover:text-alloy-orange'>About</a>
                    </li>
                </ul>
                {/* Col 2 */}
                <div className=''>
                    <a href="/register" className="pr-3 hover:text-alloy-orange">REGISTER</a>
                    <a href="/login" className="border border-alloy-orange rounded-2xl px-4 py-2 hover:text-alloy-orange">LOGIN</a>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar