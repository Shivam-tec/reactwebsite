import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Service from './Service.jsx';
import Contact from './Contact.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Navbar from './Navbar.jsx';
import "./index.css";
import Footer from "./Footer.jsx"

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />

            </Routes>
            <Footer />
        </>
    )
}
export default App;