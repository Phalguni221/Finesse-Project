import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
// import Navbar from "./Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;


// style for wrapper
const Wrapper = styled.div`
  padding: 20px;
  
`;

//style for titles
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top:50px;
`;


//style for top of the cart
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top:50px;
`;


//style for the top button
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  
`;

// style for the top texts
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;


//style for the bottoms
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;


//style for the info 
const Info = styled.div`
  flex: 3;
`;


//style for the products
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  
`;


//style for the productdetails
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;


const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  `;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 30px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      {/* <Navbar /> */}
      {/* <Announcement /> */}


      <Wrapper>
        <Title>YOUR BAG</Title>
        
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>


        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
       
                {/* <Image src="https://images.unsplash.com/photo-1562039417-003435a1399e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80" /> */}
                <Details>
                  <ProductName>
                    <b>Product:</b> Red 
                  </ProductName>
                  
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  </Details>

              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>

            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1600502281976-e0e31b326509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80g" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>

                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>

                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
              
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      {/* <Newsletter/>
      <Footer /> */}
    </Container>
  );
};

export default Cart;