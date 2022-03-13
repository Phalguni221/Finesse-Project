import {API_key} from './Api/createApi'

// on your node server
const serverApi = createApi({
  accessKey: 'API_key',
  //...other fetch options
});


async function FetchDress() {
    let fetchDress = await fetch("https://unsplash.com/s/photos/dress")
    console.log(fetchDress)
}


