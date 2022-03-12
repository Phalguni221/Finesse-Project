import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";


const Container = styled.div`
    display: flex;
    padding: 0px;
    justify-content: space-between;
    
`;

// For Arrow style
const Arrow = styled.div`
    width: 150px;
    height:100px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};;
    margin: auto;
    cursor: pointer;
    opacity: 1;
    z-index: 2;
    padding:
`;



// Wrapper for Images
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

//For images, Title, Discriptions
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

//For Image Container
const ImgContainer = styled.div`
  height: 90%;
  flex: 1;
`;


const Image = styled.img`
  height: 80%;
  
`;

//For Info Container
const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

//For Title
const Title = styled.h1`
  font-size: 70px;
`;

//For Discription
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;


//For Buttons
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: crimson;
  cursor: pointer;
  `;



const CategoryContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
      </Container>
     
      </div>
  );
};

export default Slider;