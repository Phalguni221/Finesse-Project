const React = require('react')
const Def = require('../default')


function Edit (data) {
    return (
        <Def>
            <h1>Add a New Dress to the Collection!</h1>
            <br></br>
              <form method="POST" action={`/dresses/${data.id}?_method=PUT`}>
            <br></br>
            <div className="form-group">
                <label htmlFor="title">Dress Name</label>
                <br></br>
                 <input className="form-control" id="name" name="name" value = {data.title} required />
            </div>
            <br></br>
       
            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="pic">Dress Picture</label>
                <br></br>
                 <input className="dress-form" id="img" name="img" value = {data.img} required />
                </div>
            <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="star">Star Rating</label>
                <br></br>
                 <input className="dress-form" id="star" name="star" value = {data.star} required />
                </div>
            <br></br>
            <input type="Submit" name="submit" id="submit" value="submit"/>
        </form>
        </Def>
            ) 
        }
        module.exports = Edit