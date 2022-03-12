import { createApi } from 'unsplash-js';

// on your node server
const serverApi = createApi({
  accessKey: '',
  //...other fetch options
});

// in the browser
const browserApi = createApi({
  apiUrl: 'https://mywebsite.com/unsplash-proxy',
  //...other fetch options
});