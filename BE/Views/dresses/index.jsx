const React = require('react')
const Def = require('../default')

function index (data) {
  let DressesFormatted = data.Dresses.map((Dress) => {
    return (
      <div className="col-sm-6">
        <body>
    <h1>
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
    </h1>
    </body>
  </div>
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

module.exports = index;