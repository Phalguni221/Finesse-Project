import { FormatColorTextRounded } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding:750px;
    text-align:center;
    position:fidxed;
   
`;

export default function Footer () {
    return(
      <Container>
      <p>
     <text><strong>Want to learn more about Finesse? Contact us at:</strong></text>
       <text><strong>Email:Finesse@gmail.com </strong></text>
       <text><strong>Phone number: 732-567-9087</strong></text> 
       </p>
     </Container>
    )
}

