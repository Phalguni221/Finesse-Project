import { createApi } from 'unsplash-js';
import styled from "styled-components";
import { dress } from "../data";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
    display: flex;
    padding: 30px;
    justify-content: space-between;
    position:relative;
`;

// on your node server
const serverApi = createApi({
  accessKey: 'xJ_wdcWBbnTGiycrz7trKuZZkf0UtDpVstmQipm0MpA',
  //...other fetch options
});

// // loading questions from API
// async function loadingJackets() {
// const APIUrl: 'https://unsplash.com/s/photos/dres/s';
// const result = await fetch(`${APIUrl}`)
// const data = await result.json();
// _result.innerHTMl="Fashionable dresses";
//   //...other fetch options
// showDress(data.results[15]);
// });

fetch('https://unsplash.com/s/photos/dres/s', {
  method:'POST',
  header: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify ({
    name:'Dress'
})
.then(res=> {
  if(res.ok) {
    console.log('SUCCESS')
  } else {
    console.log(' Not Successful')
  }
})
.then(data => console.log(data))

})

export default function Dress () {
    return (
        <Container>
        {dress.map((item) => (
            <DressAPI item={item} key={item.id} />
          ))} 
        </Container>
    );
};