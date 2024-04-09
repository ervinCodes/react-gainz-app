import React from 'react'

const Home = () => {
    return (
        <main className="h-full relative">
            {/* <div class="h-full w-full bg-black absolute z-10 opacity-70"></div> */}
            {/* Container */}
            <div className="flex flex-col h-full w-full text-white z-50 absolute items-center justify-around">
                {/* <a href="/login" className=""> Login</a>
                <a href="/signup" className=""> Signup</a> */}
                {/* Row 1 */}
                <div className='flex flex-col items-center gap-4'>
                    <div className='lg:text-5xl text-4xl font-semibold text-center'>Simplify your fitness goals</div>
                    <div className=''>
                        <a href="/register" className="pr-3 hover:text-alloy-orange">REGISTER</a>
                        <a href="/login" className="border border-alloy-orange rounded-2xl px-4 py-2 hover:text-alloy-orange">LOGIN</a>
                    </div>
                    {/* <a href='/about' className='uppercase border border-alloy-orange rounded-2xl px-4 py-2 hover:text-alloy-orange'>Learn More</a> */}
                    
                </div>
                {/* Row 2 */}
                <div className='flex md:flex-row flex-col md:gap-32 gap-20 text-center px-10'>
                    <div className="flex flex-col items-center">
                        <i class="fa-regular fa-circle-check fa-4x text-white"></i>
                        <div className='text-xl'>Keep <span className='text-alloy-orange font-bold'>track</span> of your personal bests</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <i class="fa-regular fa-rectangle-list fa-4x"></i>
                        <div className='text-xl'>Keep <span className='text-alloy-orange font-bold'>inventory</span> of all your workouts</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <i class="fa-regular fa-comment fa-4x"></i>
                        <div className='text-xl'>Share wins with the <span className='text-alloy-orange font-bold'>community</span></div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Home