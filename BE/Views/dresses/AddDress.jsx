const React = require('react')
const Def = require('../default')


function AddDress (data) {
        return (
            <Def>
                  <main>
                <h1>Add a New Dress</h1>
            <form method="POST" action="dresses/index">
           
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="name">Dress Name</label>
                     <input className="form-control" id="title" name="title" required />
                </div>
                <br></br>

    
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="pic">Dress Picture (Image Link)</label>
                     <input className="form-control" id="pic" name="pic" />
                    </div>
                <br></br>
    
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="star">Personal Rating</label>
                     <input className="form-control" id="star" name="star" />
                    </div>
                <br></br>
            </form>
            </main>
            </Def>
            )
        }

    module.exports = AddDress;