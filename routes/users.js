let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let UsuarioSchema = require('../models/users')

// CRUD

// Create
//localhost:5000/users/create
router.route('/create').post((req, res, next) => {
    console.log(req.body)
    UsuarioSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Users
//localhost:5000/users/
router.route('/').get((req, res) => {
    UsuarioSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Users
//localhost:5000/users/1
router.route('/:id').get((req, res, next) => {
    UsuarioSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router