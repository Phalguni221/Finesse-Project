const router = require('express').Router()
const db = require('../models')


router.get('/:id', (req, res) => {
  db.shoppingcart.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('/shoppingcart', { shoppingcart })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.shoppingcart.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/shoppingcart/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.delete('/shoppingcart/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!shoppingcart[id]) {
    res.render('error404')
  }
  else {
   shoppingcart.splice(id, 1)
    res.redirect('/shoppingcart')
  }
})

router.get('/:id/edit', (req, res) => {
  db.shoppingcart.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('/shoppingcart', { shoppingcart })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

  