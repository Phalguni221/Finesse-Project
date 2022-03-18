const router = require('express').Router()

const dress = require('../Models/dress')

router.get('/', (req, res) => {
  dress.find()
  .then((Dresses) => {
    // console.log(Dresses)
res.render('dresses/index', { Dresses })
  })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
  // res.send("API is working properly")
});

// router.get('/cart', (req, res) => {
//   dress.find()
//   .then((Dresses) => {
//     // console.log(Dresses)
// res.render('dresses/cart')
//   })
//     .catch(err => {
//       console.log(err) 
//       res.render('error404')
//     })
//   // res.send("API is working properly")
// });


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
router.get('/cart', (req, res) => {
  dress.findById(req.params.id)
  .populate('comments')
  .then((Dresses) => {
      console.log(dress.comments)
      res.render('dresses/index', { Dresses })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

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

router.put('/:id', (req, res) => {
  dress.Dress.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/dresses/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.delete('/cart', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!dress[id]) {
    res.render('error404')
  }
  else {
   dress.splice(id, 1)
    res.redirect('dresses/index')
  }
})

router.get('/:id/Edit', (req, res) => {
 dress.findById(req.params.id)
  .populate('comments')
  .then(Dresses => {
      console.log(place.comments)
      res.render('dresses/Edit', { Dresses })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

module.exports = router;
  