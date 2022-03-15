const React = require('react')

function Dress(dress) {
  let dressFormatted = data.dresses.map((dress) => {
    return (
      <div className="col-sm-6">
    <h2>
          <a href={`/dress/${dress.id}`} >
            {dress.name}
          </a>
        <p className="title-center">
          {dress.title}
        </p>
        <p className="star-center">
          {dress.star}
        </p>
    </h2>
  </div>
    )
  })

}