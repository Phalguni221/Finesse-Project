import styled from "styled-components";

//For main container
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1645389674324-7731da27cdbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Fpr Wrapper
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  
`;

//For Title
 const right = styled.h1`
   font-size: 24px;
   font-weight: 300;
 `;



 //For input styling
 const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 10px 0;
   padding: 10px;
 `;

// For button styling
 const Button = styled.button`
   width: 30%;
   display: flex;
   align-items: center;
   display: inline;
   justify-content: center;
   border: none;
   padding: 15px 20px;
   background-color: green;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    `;

// //For link styling
// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const About = () => {
  return (
<Container>
    <Wrapper>
    <title>Welcome to Finesse!</title>
    <h1>
        Browse and shop for the latest fashion trends! Whether it is to impress yourself or others, you can be sure that we have it all!
        <br></br>
        <br></br>
        Select from a wide variety of accessories and find the one that matches your style! 
        <br></br>
        <br></br>
        You can even take one of our surveys to get recommendations tailored to your unqiue preferences and personality!
    </h1>
                    <Button>Home Page</Button><br></br>
                    <Button>Survey Page</Button>
                    
            
      
    </Wrapper>
    </Container>
  );
};

export default About;

