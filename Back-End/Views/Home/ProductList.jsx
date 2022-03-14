const React = require('react')
const Def = require('../default')


  function Product (data) {
    console.log(data)
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    let number = (
      <h3 className="inactive">
        Not yet rated(numerically)
      </h3>
    )
    if (data.dress.comments.length) {
      let sumRatings = data.dress.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings /data.dress.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += '⭐️'
      }
      rating = (
        <h3>
        {stars} stars
        </h3>
      )
      number = (
        <h3>
        {sumRatings}rating
        </h3>
      )

    }
//       <h3>CommentSection</h3>
//       <a href={`${data.place.id}/edit`}> 
//           <button class type="submit" className="btn btn-danger">
//              Edit
//          </button> 
//        </a> 
//        <star>

//        </star>

//          <h1>Add a Comment Below</h1>
// {comments}
// <form method="POST" action={`/dress/${data.dress.id}/comment`}>

// <div className="col-sm-6 col-md-4 col-lg-3">
//    <label htmlFor="author">Author</label>
//     <input className="form-control" id="author" name="author"/>
// </div>
// <br></br>

// <div className="col-sm-6 col-md-4 col-lg-3">
//    <label htmlFor="content">Content</label>
//    <textarea className="form-control" id="content" name="content" rows="4" cols="50"></textarea>
// </div>
// <br></br>

// <h2>OR</h2>
//         <div className="col-sm-6 col-md-4 col-lg-3">
//           <label htmlFor="range">Star Rating(Between 1 and 5)</label>
//            <input type="range"  id="range" name="range" min="1" max="5"/>
//           </div>
//       <br></br>


//       <br></br>
//       </form>
//       <input type="submit" value="Submit"></input>
 