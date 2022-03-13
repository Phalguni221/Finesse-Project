const dress = require('express').Router()
const db = require('../models')


dress.get('/dress/:id', (req, res) => {
  db.dress.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('/dress', { dress })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

dress.put('/dress/:id', (req, res) => {
  db.dress.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/dress/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

dress.delete('/dress/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!dress[id]) {
    res.render('error404')
  }
  else {
   dress.splice(id, 1)
    res.redirect('/dress')
  }
})

dress.get('/:id/edit', (req, res) => {
  db.dress.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('/dress', { dress })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

  