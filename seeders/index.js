const seeder = require('mongoose-seed')

const data = [
  {
    model: 'Meetup',
    documents: [
      {
        topic: 'Belajar dasar nodejs',
        mentorId: '5bfd1ca5b5a8252d542411d5',
        studentId: '5bfd1ca5b5a8252d542411d6',
        datetime: '29-11-2018 05:00',
        lat: 0.0,
        lng: 0.0,
        detailPlace: 'gazebo polinema'
      }
    ]
  }
]

seeder.connect(
  'mongodb://mentorkoding:mentork0ding@ds131313.mlab.com:31313/mentor-koding-meetups',
  () => {
    seeder.loadModels(['models/Meetup.js'])
    seeder.clearModels(['Meetup'], () => {
      seeder.populateModels(data, () => {
        console.log('Populate success')
      })
    })
  }
)
