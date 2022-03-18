const React = require('react')
const Def = require('../default')

function Addtocart (data) {
    let DressesFormatted = data.Dresses.map((Dress) => {
  return (
      <Def>
          <h1>Add a New Dress to the Collection!</h1>
            <form method="POST"  action={`/dresses/${data.Dress.id}?_method=PUT`}>
            <div className="form-group">
              <label htmlFor="id">Dress Id</label>
               <input className="form-control" id="id" name="id" value = {data.Dress.id} required />
          </div>
          <br></br>
          <div className="form-group">
              <label htmlFor="name">Dress Name</label>
               <input className="form-control" id="title" name="title" value = {data.Dress.title} required />
          </div>
          <br></br>

          <div className="col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="pic">Dress Picture</label>
               <input className="dress-form" id="img" name="img" value = {data.Dress.img}  />
              </div>
          <br></br>

          <div className="col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="city">Star Rating</label>
               <input className="dress-form" id="star" name="star" value = {data.Dress.stars} />
              </div>
          <br></br>
      </form>
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

    module.exports = Addtocart