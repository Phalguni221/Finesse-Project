const React = require('react')
const Def = require('../default')

function show (data) {
return (
    <Def>
          <link rel="stylesheet" href="/css/style.css"/>
        <main>
          <h1>{data.dress.name}</h1>
      
             <img src={data.img} alt={data.title}/>
            <h2>
        Description
      </h2>
      <h4>
        {data.showEstablished()}
      </h4>
 
          <h3>Comment Section</h3> 

              <h1>Add a Comment Below</h1>
    {comments}
<form method="POST" action={`/dresss/${data.id}/comment`}>

    <div className="col-sm-6 col-md-4 col-lg-3">
        <label htmlFor="author">Author</label>
         <input className="form-control" id="author" name="author"/>
    </div>
    <br></br>

    <div className="col-sm-6 col-md-4 col-lg-3">
        <label htmlFor="content">Content</label>
        <textarea className="form-control" id="content" name="content" rows="4" cols="50"></textarea>
    </div>
  <br></br>
{/* 
    <div className="col-sm-6 col-md-4 col-lg-3">
        <label htmlFor="number">Star Rating</label>
         <input type="number" value="0" id="number" name="number"/>
        </div> */}
      <h2>OR</h2>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <label htmlFor="range">Star Rating(Between 1 and 5)</label>
         <input type="range"  id="range" name="range" min="1" max="5"/>
        </div>

    <br></br>

    <div className="col-sm-6 col-md-4 col-lg-3">
        <label htmlFor="rant">Rant</label>
         <input type="checkbox" id="rant" name="rant" value="true"></input>
        <label for="true">True</label>
        <input type="checkbox" id="rant" name="rant" value="false"></input>
         <label for="false">False</label>  
    </div>
    <br></br>
    <input type="submit" value="Submit"></input>
</form>
</main>
</Def>
       )
  }

  module.exports = show