import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';


const Home = () => {
    return (
    
        <BrowserRouter>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            

        </BrowserRouter>
     
    )
}

export default Home;
 

