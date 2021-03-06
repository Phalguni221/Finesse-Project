
import styled from "styled-components"


//For whole block picture set-up
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  justify-content: center;
`;

//For Image 
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

//For Information
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


//For Title
const Title = styled.h1`
    color:white;
    margin-bottom: 10px;
    margin-left:100px;
    display: flex
    text-align: center;
`;


//For Button
const Button = styled.button`
    border:none;
    padding: 15px;
    font-size: 20px;
    background-color: orange;
    cursor: pointer;
    font-weight: 600;
`;




const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <br></br>
                    {/* <Button>SHOP NOW</Button> */}
                    <Button>
              SHOP NOW!
              </Button>
                </Info>
        </Container>
    );
};


export default CategoryItem;
