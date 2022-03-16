const React = require('react')
const Def = require('../default')

function index (data) {
  let DressesFormatted = data.Dresses.map((Dress) => {
    return (
      <Def>
      <div className="col-sm-6">
        <h1>Finesse the Dress!</h1>
          <a href={`/dresses/${Dress.id}`}>
                </a> 
      <p className="title-center">
       {Dress.title} 
         </p>
         <p className="img-center">
         <img src = {Dress.img} alt = {Dress.title}/>
        </p>
         <p className="star-center">
         {Dress.star}
        </p>
      </div> 
  </Def>
    )
    
  })
  return (
    <Def>
        <main>
            <h1>Finesse the Dress!</h1>
          {DressesFormatted}
        </main>
    </Def>
)
}

module.exports = index