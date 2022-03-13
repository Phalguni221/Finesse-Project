import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data"; 





const Container = styled.div`
    display: flex;
    margin-right:170px;
    justify-content: space-between;    
`;

// For Arrow style
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: hotpink;
    border-radius: 50%;
    display: flex-wrap;
    flex:1;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "25px"};;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    padding:10px
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
`;


const Image = styled.img`
  height: 90%;
  
`;

//For Info Container
const InfoContainer = styled.div`
  flex: 1;
  // padding: 20px;
`;

//For Title
const Title = styled.h1`
margin:20px;
  font-size: 60px;
  display:flex;
`;

//For Discription
const Desc = styled.p`
  margin: 50px 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;


//For Buttons
const Button = styled.div`
  padding: 10px;
  width:20;
  font-size: 15px;
  // background-color:white;
  cursor: pointer;
  margin-left:20px;
  // margin-top:300px;
  margin-right:200px;
  `;



const CategoryContainer = styled.div`
    display: flex;
    padding: 30px;
    justify-content: space-between;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
    
    else {
      setSlideIndex(slideIndex < 0 ? slideIndex - 1 : 0);
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
              <Button>
              <form method="GET" action="Dress">
             <text><input type="Submit" name="Shop Now!" id="Shop Now!" value="Shop Now!"/></text>
             </form> 
              </Button>
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