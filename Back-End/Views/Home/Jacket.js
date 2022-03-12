import { createApi } from 'unsplash-js';

// on your node server
const serverApi = createApi({
  accessKey: 'xJ_wdcWBbnTGiycrz7trKuZZkf0UtDpVstmQipm0MpA',
  //...other fetch options
});

// loading questions from API
async function loadingJackets() {
const APIUrl: 'https://unsplash.com/s/photos/dres/s';
const result = await fetch(`${APIUrl}`)
const data = await result.json();
_result.innerHTMl="Fashionable dresses";
  //...other fetch options
showDress(data.results[15]);
});

