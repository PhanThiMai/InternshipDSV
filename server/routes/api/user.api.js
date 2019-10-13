const mongoose = require('mongoose');
const router = require('express').Router();
const users = require('../../models/user.model')

var crypto = require("crypto");

const hashPassword = (email, password) => {
    let secret = `${email}${password}`
        .toUpperCase()
        .split("")
        .reverse()
        .join();
    return crypto
        .createHmac("SHA256", secret)
        .update(password)
        .digest("hex");
}

router.post('/', (req, res, next) => {
    const { body } = req;

    if (!body.fullname) {
        return res.status(422).json({
            errors: {
                fullname: 'is required',
            },
        });
    }

    if (!body.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!body.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }


    users.findOne({
        email: body.email
    })
        .then(user => {
            if (!user) {
                body.password = hashPassword(body.email, body.password);
            } else {
                res.json({ errors: 'User already exists', type: 0 })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })


    let finalUser = new users({
        username: body.username,
        email: body.email,
        password: body.pas
    });

    return finalUser.save()
        .then(() => res.json({ data: finalUser.toJSON(), type: 1 }))
        .catch(next);
});

router.get('/', (req, res, next) => {
    return users.find()
        .then((users) => res.json({ users: users.map(user => user.toJSON()) }))
        .catch(next);
});

router.param('id', (req, res, next, _id) => {
    return users.findById(_id, (err, user) => {
        if (err) {
            return res.sendStatus(404);
        } else if (user) {
            req.user = user;
            return next();
        }
    }).catch(next);
});

router.get('/:id', (req, res, next) => {
    return res.json({
        user: req.user.toJSON(),
    });
});

router.patch('/:id', (req, res, next) => {
    const { body } = req;

    if (typeof body.fullname !== 'undefined') {
        req.user.fullname = body.fullname;
    }

    if (typeof body.email !== 'undefined') {
        req.user.email = body.email;
    }

    if (typeof body.password !== 'undefined') {
        req.user.password = body.password;
    }

    return req.user.save()
        .then(() => res.json({ user: req.user.toJSON() }))
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    return users.findByIdAndRemove(req.user.id)
        .then(() => res.sendStatus(200))
        .catch(next);
});

module.exports = router;