const express = require('express')
const router = express.Router()

let db = [
    { "id" : 1, "name" : "Fernando Avellar", "email" : "favellar@yahoo.com.br"},
    { "id" : 2, "name" : "Edy Segura", "email" : "edy-segura@inatel.br"},
    { "id" : 3, "name" : "Thiago Pereira", "email" : "thiago@gmail.com"} ]

router.get('/', (request, response) => {
    response.json(db)
})

router.get('/:id', (request, response) => {
    let subscriber = db.find(sub => sub.id == request.params.id)
    if(subscriber) {
        response.json(subscriber)
    }
    else {
        response
        .status(404)
        .send('Not found')
    }
})

router.post('/', (request, response) => {
    let newSubscriber = {
        id : db.length+1,
        name : request.body.name,
        email : request.body.email
    }

    db.push(newSubscriber)

    response
    .status(201)
    .json(newSubscriber)
})

router.delete('/:id', (request, response) => {
    var subscriberIndex = db.findIndex(sub => sub.id == request.params.id)
    if (subscriberIndex != -1) {
        db.splice(subscriberIndex, 1)
        response.send('Subscriber deleted')
    }
    else {
        response
        .status(404)
        .send('Not found')
    }
});

module.exports = router