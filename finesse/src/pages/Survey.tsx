import styled from "styled-components";
import Thanks from "./Thanks"

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1644424234553-2cd68a04bc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")
      center;
    margin-right:70px;
    margin-top:100px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
  width: 40%;
  padding: 60px;
  background-color: white;
  align-items:center;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 15px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
`;

const Survey = () => {
  return (
<Container>
    <Wrapper>
    <h1>Take this Survey to get recommended clothes to your style and suiting!</h1>
    <br></br><br></br>
    <form method="GET" action="Thanks">
    <div>
                    <label for="color">What is your favorite color?</label><br></br>
                    <input type="text" minlength="3" maxlength="22" id="firstname" name="colorname" placeholder="colorname" required />
                </div>
                <br></br>
               
                <label for="material">Preferred material</label>
                <br></br>
                <select name="material-list">
                                <option value="cotton">Cotton</option>
                                <option value="polyester">Polyester</option>
                                <option value="veganleather">Vegan Leather</option>
                                <option value="faux fur">Faux fur</option>
                                <option value="nylon">Nylon</option>
                </select>
                                  <br></br>
                                  <br></br>
               
                                <label for="brand">Preferred brand</label>
                                <br></br>
                <select name="brand-list">
                                <option value="Zara">Zara</option>
                                <option value="Kohls">Kohls</option>
                                <option value="Ralph Lauren">Ralph Lauren</option>
                                <option value="Gucci">Gucci</option>
                                <option value="Prada">Prada</option>
                                <option value="Macy's">Macy's</option>
                </select>
                                  <br></br>          
                                  <br></br>
                          <div>
                        <p>What is your main purpose of purchasing a jacket(s)? Pick ONE or MORE options below</p>
                        <br></br>
                              <legend>
                               Purpose of Jacket
                            </legend>
                           
                            <div>
                                <input type="checkbox" id="comfort" name="comfort" value="comfort"/> 
                                <label for="comfort">Comfort</label>
                            </div>
                           <div>
                            <input type="checkbox" id="style" name="extras" value="style"/> 
                            <label for="style">Style</label>
                           </div>
                              <div>
                                <input type="checkbox" id="trend" name="extras" value="tour"/> 
                                <label for="trend">Trend</label>  
                              </div>
                              <br></br>
                              <br></br>
                              <div>
                              <p>Other reasons? List below:</p>
                            <input type="text" minlength="1" maxlength="300" id="other" name="other" placeholder="other"/>
                            
                            </div>
                          
     <br></br>
     <br></br>
     </div>
     <Button>Click here to submit !</Button>
        </form>
    </Wrapper>
    </Container>
  );
};

export default Survey;