import { createApi } from 'unsplash-js'

// on your node server
const serverApi = createApi({
  accessKey: 'API_Key',
  //...other fetch options
});


export default function Dress () {
    return (
        <Container>
        {Dress.map((item) => (
            <DressAPI item={item} key={item.id} />
          ))} 
        </Container>
    );
};
async function getDress() {
    let fetchDress = await fetch("https://unsplash.com/s/photos/dress")
    console.log(fetchDress)
}

