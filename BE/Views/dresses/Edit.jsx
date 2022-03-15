
const React = require('react')


function AddDress (data) {
    return (
        <Def>
            <h1>Add a New Dress to the Collection!</h1>
              <form method="POST"  action={`/dresses/${data.dress.id}?_method=PUT`}>
            <br></br>
            <div className="form-group">
                <label htmlFor="name">Dress Name</label>
                 <input className="form-control" id="name" name="name" value = {data.dress.title} required />
            </div>
            <br></br>
       
            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="pic">Dress Picture</label>
                 <input className="dress-form" id="img" name="img" value = {data.dress.img} required />
                </div>
            <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="city">Star Rating</label>
                 <input className="dress-form" id="star" name="star" value = {data.dress.star} required />
                </div>
            <br></br>
        </form>
        </Def>
            )
        }