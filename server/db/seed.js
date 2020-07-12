require('dotenv').config()
const seeder = require('mongoose-seed');

console.log(process.env.MONGODB_URL)
seeder.connect(process.env.MONGODB_URL, function(){
    seeder.loadModels([
        './server/models/user.model.js',
        './server/models/question.model.js'
    ]);
    seeder.clearModels (['User','Question' ], function(){
        seeder.populateModels(data, function (err, done){
            if(err) {
                return console.log("seed err", err)
            }
            if (done) {
                return console.log("seed done", done);
            }
            seeder.disconnect()
        })
    })
})

const data = [
    {
        'model': 'User',
        'documents': [
            {
                "userName": "user1",
                "fullName": "user1",
                "password": "123123123",
                "points": "0"
            }
        ]
    },
    {
        'model': 'Question',
        'documents': [
            {
                "question": "What is the brightest object in the night sky after the sun and the moon?",
                "rightAnswer": "Venus",
                "expired": "false"
            },
        ]
    }
]