const express = require('express')
const router = express.Router()
const meetup = require('../controllers/meetup')

router.get('/', meetup.index)
router.get('/:id', meetup.show)
router.post('/', meetup.store)
router.put('/:id', meetup.update)
router.delete('/:id', meetup.destroy)

module.exports = router
