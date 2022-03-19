const React = require('react')
const Def = require('../default')
import DressSchema from "../../Models/dress"
import cart from "./cart"



<Def>
<title>Finesse</title>
<h1>Finesse the Dress!</h1>
</Def>

function index (data) {
  console.log(data)
  // console.log(DressSchema.find({}))
  let DressesFormatted = data.Dresses.map((Dress) => {
    // console.log(DressSchema.find({}))
    return (
      <Def>
      <div className="col-sm-6">
          <a href={`/dresses/${Dress.id}`}>
                </a> 
      <div class="column">
         <p className="img-center">
         <img src = {Dress.img} alt = {Dress.title}/>
         </p>
         <p className="title-center">
       {Dress.title} 
         </p>
         <p className="star-center">
         {Dress.stars}
          </p>
              <p>
             <form method="GET" action="show">
             <text><input type="Submit" name="show" id= "button4" value="show"/></text>
             </form> 
             </p>
             <br></br>
             <p>
               <form method="GET" action="Cart">
             <text><input type="Submit" name="Add to Cart" id="button1" value="Add to Cart"/></text>
             </form> 
          <br></br>
          <br></br>
             </p>
              <p>
             <form method="GET" action="Edit">
             <text><input type="Submit" name="Edit" id="button2" value="Edit"/></text>
             </form> 
              </p>
              <br></br>
            
              <p>
             <a href={`${data.id}/delete`}></a>
             <input type="Submit" name="Delete" id="button3" value="Delete"/>
             </p>
             <br></br>
           
        <br></br>
        <br></br>
        <hr></hr>
         </div>
         </div>
  
      </Def>
    )
    
  })
  return (
        <main>
            <h1>Finesse the Dress!</h1>
          {DressesFormatted}
          <span class = "brlarge"></span>
          <span class = "brlarge"></span>
          <span class = "brlarge"></span>
          <span class = "brlarge"></span>
          <footer>
          <h1> Addressing Customer's AddDress</h1>
    <p>Got any personal suggestions or favorites? Please add any choice of your dress that you like from our provider Unsplash! 
      Click the button "AddDress" below to access 
      Link to the dress section of Unsplash is located below. Copy the image link of any dress that you like!
      Click the button "AddDress" below to access a submit form for the dress. 
      Paste the link in the appropriate submission area and then provide your dress with a title and your personal star rating.
       and paste it in the submit form below. Watch your preferred dress appear on screen below the dresses we have in Stokc
      We promise to have it in stock within 5 business days for you to purchase!</p>
      <form method="GET" action="AddDress">
             <text><input type="Submit" name="AddDress" id="AddDress" value="AddDress"/></text>
             </form>
                <br></br>
            <p>Link to Unsplash:</p>
            
          <h2><a href="https://unsplash.com/s/photos/dress">Unsplash: Dress Images</a></h2>
              <br></br>
             <br></br>
          </footer>
        </main>
  
)
}


module.exports = index