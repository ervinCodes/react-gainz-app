import React from 'react'

const Home = () => {
    return (
        <main class="container">
            <div class="row justify-content-around mt-5">
                <a href="/login" class="col-3 btn btn-primary text-3xl underline"> Login</a>
                <a href="/signup" class="col-3 btn btn-primary"> Signup</a>
            </div>
            
        </main>
    )
}

export default Home