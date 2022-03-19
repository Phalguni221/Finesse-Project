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

router.get('/AddDress', (req, res) => {
  res.render('dresses/AddDress')
})

router.get('/cart', (req, res) => {
  dress.find()
  .then((Dresses) => {
    console.log(Dresses)
res.render('dresses/cart')
  })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
  // res.send("API is working properly")
});


// router.post('/', (req, res) => {
//   dress.create(req.body)
//   .then(() => {
//       res.redirect('/dresses')
//   })
//   .catch(err => {
//     console.log('err', err)
//       res.render('error404')
//   })
// })

router.post('/', function (req, res, next) {
  dress.Dress.create(req.body)
  .then(() => {
res.redirect('/dresses')
  })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
  // res.send("API is working properly")
});

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

// // //GET dress route
// router.get('/cart', (req, res) => {
//   dress.findById(req.params.id)
//   .populate('comments')
//   .then((Dresses) => {
//       console.log(dress.comments)
//       res.render('dresses/index', { Dresses })
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// //GET dress route
// router.get('/:id', (req, res) => {
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

//Adding pagination
// dress.post('/add-dress', function(req, res, next) {
//   var dress = new dress()

//   dress.title = req.body.category_title
//   dress.img = req.body.dress_img
//   dress.stars = req.body.dress_stars
//   dress.cover = faker.image.image()

// router.put('/:id', (req, res) => {
//   dress.Dress.findByIdAndUpdate(req.params.id, req.body)
//   .then(() => {
//       res.redirect(`/dresses/${req.params.id}`)
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })


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

// router.get('/:id/Edit', (req, res) => {
//  dress.findById(req.params.id)
//   .populate('comments')
//   .then(Dresses => {
//       console.log(dress.comments)
//       res.render('dresses/Edit', { Dresses })
    
//     })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

router.get('/Edit', (req, res) => {
  dress.findById(req.params.id)
  .then((Dresses) => {
      console.log(dress.comments)
      res.render('dresses/Edit', { Dresses })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

module.exports = router;
  