import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer'




const Home = () => {
    return (
       <BrowserRouter>
            <Announcement/>
             <Navbar/>
            
             <Footer/>
        </BrowserRouter>
      
    )
}

export default Home;


