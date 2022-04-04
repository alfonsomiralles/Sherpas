// import required essentials
const express = require('express');
// create new router
const router = express.Router();

// create a JSON data array
let data = [
    { id: 1, name: 'Alfonso',  surname: "Miralles", email: "alfonsomiralles1@gmail.com", birthdate: "18/02/1987" },
    { id: 2, name: 'Maria',  surname: "Perales", email: "mariaperales@gmail.com", birthdate: "06/08/2000" },
];


// HTTP methods ↓↓ starts here.

// READ
// this api end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// READ
// this api end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (customer) {
        return customer.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE
// this api end-point add new object to customer list
// that is add new object to `data` array
router.post('/', function (req, res) {
    // get customerIds from data array
    let customerIds = data.map(customer => customer.id);

    // create new id (basically +1 of last customer object)
    let newId = customerIds.length > 0 ? Math.max.apply(Math, customerIds) + 1 : 1;

    // create an object of new customer
    let newCustomer = {
        id: newId, // generated in above step
        name: req.body.name, // value of `name` get from POST req
        surname: req.body.surname, // generated in above step
        email: req.body.email, // default value is set to false
        birthdate: req.body.birthdate // new date object
    };

    // push new customer object to data array of customers
    data.push(newCustomer);

    // return with status 201
    // 201 means Created. The request has been fulfilled and 
    // has resulted in one or more new resources being created. 
    res.status(201).json(newCustomer);
});

// UPDATE
// this api end-point update an existing customer object
// for that we get `id` from api end-point of customer to update
router.put('/:id', function (req, res) {
    // get customer object match by `id`
    let found = data.find(function (customer) {
        return customer.id === parseInt(req.params.id);
    });

    // check if customer found
    if (found) {
        let updated = {
            id: found.id,
            name: req.body.name, // set value of `name` get from req
            surname: req.body.surname, // set value of `surname` get from req
            email: req.body.email, // set value of `email` get from req
            birthdate: req.body.birthdate // set value of `birthdate` get from req
        };

        // find index of found object from array of data
        let targetIndex = data.indexOf(found);

        // replace object from data list with `updated` object
        data.splice(targetIndex, 1, updated);

        // return with status 204
        // success status response code 204 indicates
        // that the request has succeeded
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

// DELETE
// this api end-point delete an existing customer object from
// array of data, match by `id` find customer and then delete
router.delete('/:id', function (req, res) {
    // find customer from array of data
    let found = data.find(function (customer) {
        return customer.id === parseInt(req.params.id);
    });

    if (found) {
        // if customer found then find index at which the customer is
        // stored in the `data` array
        let targetIndex = data.indexOf(found);

        // splice means delete customer from `data` array using index
        data.splice(targetIndex, 1);
    }

    // return with status 204
    // success status response code 204 indicates
    // that the request has succeeded
    res.sendStatus(204);
});

// module.exports is an object included in every JS file of Node.js
// application, whatever we assign to module.exports will be exposed as a module. 
module.exports = router;