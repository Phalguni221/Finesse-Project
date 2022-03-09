import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from "styled-components"


// Container
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: coral;
    position: relative;
`;


// For Arrow style
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;



// Wrapper for Images




function Slider() {
  return (
    <Container>
        <Arrow direction="left">
           <ArrowLeftOutlined/> 
        </Arrow>
        <Arrow direction="right">
           <ArrowRightOutlined/> 
        </Arrow>
    </Container>
  )
}

export default Slider
