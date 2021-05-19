const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId
const Employee = require('../models/employee.js')

/* 

GET, POST, PUT, DELETE
Base Path : http://localhost:3000/employee

*/
// GET API
router.get('/', (req, res) => {
    Employee.find((err, doc) => {
        if (err) {
            console.log('Error in GET data' + err);
        } else {
            res.send(doc);
        }
    });
});

// GET single employee API
// router.get('/:id', (req, res) => {
//     if (ObjectId.isValid(req.params.id)) {
//         Employee.findById(req.params.id, (err, doc) => {
//             if (err) {
//                 console.log('Error in GET Employee by Id' + err);
//             } else {
//                 res.send(doc);
//             }
//         })
//     } else {
//         return res.status(400).send('No record found with Id: ' + req.params.id)
//     }
// });

// POST API
router.post('/', (req, res) => {
    let emp = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        gender: req.body.gender,
        dept: req.body.dept
    });
    emp.save((err, doc) => {
        if (err) {
            console.log('Error in POST data' + err);
        } else {
            res.send(doc);
        }
    })
})

// PUT API
router.put('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        let emp = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dob: req.body.dob,
            gender: req.body.gender,
            dept: req.body.dept
        };
        Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
            if (err) {
                console.log('Error in PUT Employee by Id' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send('No record found with Id: ' + req.params.id)
    }
});

// DELETE API
router.delete('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                console.log('Error in DELETE Employee by Id' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send('No record found with Id: ' + req.params.id)
    }
});
module.exports = router;