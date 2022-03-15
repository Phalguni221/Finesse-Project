

const React = require('react')


function AddDress (data) {
    return (
        <Def>
            <link rel="stylesheet" href="css/style.css"/>
              <main>
            <h1>Add a New Dress to the Collection!</h1>
        <form method="POST" action="/places">
       
            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Dress Name</label>
                 <input className="dress-form" id="name" name="name" required />
            </div>
            <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="pic">Dress Picture</label>
                 <input className="dress-form" id="pic" name="pic" />
                </div>
            <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="city">Star Rating</label>
                 <input className="dress-form" id="star" name="star" />
                </div>
            <br></br>
        </form>
            </main>
        </Def>
            )
        }