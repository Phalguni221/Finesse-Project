
// import styled from "styled-components"
// import {API_key} from "../API/Api"
// import { createSlice } from "@reduxjs/toolkit";


// //For whole block picture set-up
// const Container = styled.div`
//   flex: 1;
//   margin: 3px;
//   height: 70vh;
//   position: relative;
// `;

// //For Image 
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
  
// `;

// //For Information
// const Info = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;


// //For Title
// const Title = styled.h1`
//     color:white;
//     margin-bottom: 20px;
//     display: flex
// `;


// //For Button
// const Button = styled.button`
//     border:none;
//     padding: 15px;
//     background-color: white;
//     color:black;
//     cursor: pointer;
//     font-weight: 600;
// `;

// const initialState = {
// Dress: {} 
// }

// export const ImageSlice = createSlice({
//   name: "image",
//   initialState,
//   reducers: {
//     DressAPI: (state, action) => {
//       return { ...state, DressAPI: action.payload };
//     }
//   }
// });
//     export const { Dress } = ImageSlice.actions;
// export default ImageSlice.reducer;

// export const DressAPI = () => {
//       const DressThunk = async (dispatch) => {
//    const response = await fetch(
//      `https://unsplash.com/s/photos/dress`
//    );
//         const data = await response.json();
//     dispatch(DressAPI(data));
//   };
//     return DressThunk;
// };

// import {API_key} from './Api/createApi'

// on your node server
const serverApi = createApi({
  accessKey: 'API_key',
  //...other fetch options
});


async function fetchDress() {
    let fetchDress = await fetch("https://unsplash.com/s/photos/dress", {
        method:"GET"
    })
    console.log(fetchDress)
}