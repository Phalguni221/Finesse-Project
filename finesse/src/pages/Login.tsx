import styled from "styled-components";
import Survey from "./Survey"


//For main container
const Container = styled.div`
  width: 50vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1641550285400-4adeb895f896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right:1000px;
  margin-top:100px;
`;

//Fpr Wrapper
const Wrapper = styled.div`
  width: 25%;
  padding: 150px 150px;
  background-color: white;
  
`;

//For Title
const right = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

//For form styling
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

//For input styling
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

//For button styling
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

//For link styling
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
<Container>
    <Wrapper>
    <h1>Welcome to the Log In page!</h1>
    <h2>If you are already a member, then please Log In! 
      If you aren't a member but want to become one, please go to the sign-in page to become a new member of Finesse!</h2>
      <br></br>
      <br></br>
      
      <div>
      <form action="#" method="POST">
                    <label for="username">UserName<span class="required-field">*</span></label>
                    <input type="text"  minlength="2" maxlength="35" id="username" name="username" placeholder="username" required />
            </form>
                </div>
        
        
        <br></br>
        <br></br>
        
                <br></br>
                 <div>
                 <form action="#" method="POST">
                <label for="Password">Password<span class="required-field">*</span></label>
                    <input type="text"  minlength="2" maxlength="35" id="lastname" name="lastname" placeholder="lastname" required /><br></br><br></br>

                    <Button src="Survey">Log In</Button><br></br>
                    <Button>Survey Page</Button>
                    </form>
                    
                 </div>
            
       
          <br></br>
          <br></br>
            
      {/* <Button>
        <form method="GET" action="Survey">
    <input type="Submit" name="Survey" id="Survey" value="Survey"/>
    </form>
      </Button>
      <Button>
    <form method="GET" action="Account">
      <input type="Submit" name="Login" id="Login" value="Login"/>
      </form>
      </Button> */}
      
    </Wrapper>
    </Container>
  );
};

export default Login;

