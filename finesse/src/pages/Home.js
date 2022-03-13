

import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Announcement from '../components/Announcement';

import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Intro from '../components/Intro'
import Newsletter from '../components/Newsletter';
import Cart from '../components/Cart';
import SideItem from '../components/SideItem'





export default function Home () {
    return (
        <BrowserRouter>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </BrowserRouter>
     
      )
}

      
 



