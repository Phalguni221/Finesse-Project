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

router.get('/AddDress', (req, res) => {
  res.render('dresses/AddDress')
})

// router.get('/cart', (req, res) => {
//   dress.find()
//   .then((Dresses) => {
//     console.log(Dresses)
// res.render('dresses/cart')
//   })
//     .catch(err => {
//       console.log(err) 
//       res.render('error404')
//     })
//   // res.send("API is working properly")
// });

router.put('/:id', (req, res) => {
  dress.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`dresses/index/${req.params.id}`)
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


router.get('/Edit', (req, res) => {
  dress.findById(req.params.id)
  .then((Dresses) => {
      res.render('dresses/Edit', { Dresses })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

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

router.delete('/dresses/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!dress[id]) {
    res.render('error404')
  }
  else {
    dress.splice(id, 1)
    res.redirect('/dresses')
  }
})

module.exports = router;
  