const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Book.JSON.stringify()
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.get('/:id', (req, res) => {
    db.Book.findById(req.params.id)
    .then(() => {
      JSON.stringify()
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Book.create(req.body)
    .then(() => {
        res.redirect('/books')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

router.put('/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/books/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

router.delete('/:id', (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
    .then(book => {
        res.redirect('/books')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })





module.exports = router