import './App.css'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import SignIn from './SignIn.js'
import Register from './Register'

export default function Results() {
    return (
        <div>
             <script type="text/javascript">
        {/* var urlParams = new URLSearchParams(window.location.search); */}

              // Gather some of the data from the querystring
              l`${urlParams.get('firstname')} ${urlParams.get('lastname')}`;
              console.log(name)            
              // Fill the page with the user's personal information
              document.getElementById('disclaimer').textContent = `Thank you, ${firstname}, ${lastname}, for becoming a new Finesse member!`
              </script>
           
              //Annoucement 
              <form method="GET" action="SignIn">
               <input type="Submit" name="SignIn" id="SignIn" value="SignIn"/>
             </form>
            
    </div>
          
              
    )
}

