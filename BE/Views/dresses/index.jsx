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
         <form method="GET" action="cart">
             <text><input type="Submit" name="Add to Cart" id="Add to Cart" value="Add to Cart"/></text>
             </form> 
         </div>

      </div> 
      </Def>
    )
    
  })
  return (
        <main>
            <h1>Finesse the Dress!</h1>
          {DressesFormatted}
        </main>
  
)
}

module.exports = index