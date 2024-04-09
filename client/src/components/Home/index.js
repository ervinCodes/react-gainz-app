import React from 'react'

const Home = () => {
    return (
        <main className="bg-hero h-full bg-cover bg-center relative">
            <div class="h-full w-full bg-black absolute z-10 opacity-70"></div>
            {/* Container */}
            <div className="flex flex-col h-full w-full text-white z-50 absolute">
                {/* <a href="/login" className=""> Login</a>
                <a href="/signup" className=""> Signup</a> */}
                {/* Row 1 */}
                <div>
                    <div>Simplify your fitness goals</div>
                    <a href='' className='uppercase'>Learn More</a>
                </div>
                {/* Row 2 */}
                <div className=''>
                    <div>
                        <div></div>
                        <div>Keep track of your personal bests</div>
                    </div>
                    <div>
                        <div></div>
                        <div>Keep inventory of all your workouts</div>
                    </div>
                    <div>
                        <div></div>
                        <div>Share wins with the community</div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Home