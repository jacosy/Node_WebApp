const express = require('express')

const router = express.Router()

router.use(function (req, res, next) {
  console.log(`Log Before Default Router, Time: ${Date.now()}`)
  next()
})

router.get('/', (req, res) => {
  const obj = {
    title: 'My Test Title',
    content: [{ name: 'Test Name', value: 'Test Value' }, { name: 'Test 2', value: 'Value 2' }]
  }
  res.render('default/default', obj)
})

router.get('/default', (req, res) => {
  const obj = {
    title: 'My Test Title',
    content: [{ name: 'Test Name', value: 'Test Value' }, { name: 'Test 2', value: 'Value 2' }]
  }
  res.render('default/default', obj)
})

router.use(function (req, res, next) {
  console.log(`Log After Default Router, Time: ${Date.now()}`)
  next()
})

module.exports = router