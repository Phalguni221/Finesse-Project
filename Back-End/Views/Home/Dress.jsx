// import {API_key} from './Api'

// // on your node server
// const serverApi = createApi({
// 000API_key}
//   //...other fetch options
// });

async function FetchDress() {
    let fetchDress = await fetch("https://unsplash.com/s/photos/dress")
    .then(response => response.json())
  .then(fetchDress => console.log(fetchDress));
    // console.log(fetchDress)
}


