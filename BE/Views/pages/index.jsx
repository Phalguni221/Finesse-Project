const React = require('react')
const Def = require('../default')

function dress (dress) {
  let dressFormatted = data.dresses.map((dress) => {
    return (
      <div className="col-sm-6">
        <body>
    <h1>
          <a href={`/pages/${dress.id}`}>
          </a>
        <p className="title-center">
          {dress.title}
        </p>
        <p className="image-center">
          {dress.img}
        </p>
        <p className="star-center">
          {dress.star}
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
            {dressFormatted}
        </main>
    </Def>
)
}

module.exports = index