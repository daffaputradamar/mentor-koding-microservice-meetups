const Meetup = require('../models/Meetup')

module.exports = {
  index: async (req, res) => res.json(await Meetup.find()),
  show: async (req, res) => res.json(await Meetup.findById(req.params._id)),
  store: async (req, res) => res.json(await Meetup.create(req.body.meetup)),
  update: async (req, res) => {
    const { _id } = req.params
    const { meetup } = req.body
    return res.json(
      await Meetup.findOneAndUpdate({ _id }, { $set: meetup }, { new: true })
    )
  },
  destroy: async (req, res) =>
    res.json(await Meetup.findOneAndDelete({ _id: req.params._id }))
}
