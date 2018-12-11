const express = require('express')
const router = express.Router()
const meetup = require('../controllers/meetup')

router.get('/', meetup.index)
router.get('/:_id', meetup.show)
router.post('/', meetup.store)
router.put('/:_id', meetup.update)
router.delete('/:_id', meetup.destroy)

module.exports = router
