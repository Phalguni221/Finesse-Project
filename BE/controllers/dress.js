const dress = require('express').Router()

const db = require('../models')

dress.get('/', (req, res) => {
  db.Dress.find()
  .then((Dresses) => {
res.render('dresses/index', { Dresses })
  })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
  // res.send("API is working properly")
});

router.post('/', (req, res) => {
  db.Dress.create(req.body)
  .then(() => {
      res.redirect('/dresses')
  })
  .catch(err => {
    console.log('err', err)
      res.render('error404')
  })
})


// dress.post('/', function (req, res, next) {
//   db.dresses.create(req.body)
//   .then(() => {
// res.redirect('/places')
//   })
//     .catch(err => {
//       console.log(err) 
//       res.render('error404')
//     })
//   // res.send("API is working properly")
// });


// // //GET dress route
// dress.get('/:id', (req, res) => {
//   db.dress.findById(req.params.id)
//   .populate('comments')
//   .then((dress) => {
//       console.log(dress.comments)
//       res.render('/dress', { dress })
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// //Adding pagination
// dress.post('/add-dress', function(req, res, next) {
//   var dress = new dress()

//   dress.category = req.body.category_name
//   dress.name = req.body.dress_name
//   dress.price = req.body.dress_price
//   dress.cover = faker.image.image()

//   dress.save(function(err) {
//       if (err) throw err
//       res.redirect('/add-dress')
//   })
// })

// dress.put('/:id', (req, res) => {
//   db.Dress.findByIdAndUpdate(req.params.id, req.body)
//   .then(() => {
//       res.redirect(`/dress/${req.params.id}`)
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// dress.delete('/cart/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!dress[id]) {
//     res.render('error404')
//   }
//   else {
//    dress.splice(id, 1)
//     res.redirect('/dress')
//   }
// })

// dress.get('/:id/edit', (req, res) => {
//   db.dress.findById(req.params.id)
//   .populate('comments')
//   .then(place => {
//       console.log(place.comments)
//       res.render('/dress', { dress })
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

module.exports = dress;
  