import React from "react"
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Feed from './components/Feed'
import PostPage from './components/PostPage'
import Navbar from './components/Navbar'

// import [COMPONENT_NAME] from './components/[COMPONENT_NAME]'

import { Route, Routes, useParams } from 'react-router-dom'

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/feed" element={<Feed />}/>
                <Route path="/post/:id" element={<PostPage />}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App