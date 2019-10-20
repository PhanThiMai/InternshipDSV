const mongoose = require('mongoose');
const router = require('express').Router();
const users = require('../../models/user.model')
const jwt = require('jsonwebtoken')

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

router.post('/register', (req, res, next) => {
    const { body } = req;

    if (!body.fullname || body.fullname.length < 3) {
        return res.json({
            type: 0,
            errors: {
                fullname: 'Please enter a valid name !',
            },
        });
    }

    if (!body.email || body.email.length < 6) {
        return res.status(422).json({
            type: 0,
            errors: {
                email: 'Please enter a valid e-mail !',
            },
        });
    }

    if (!body.password || body.password.length < 5) {
        return res.status(422).json({
            type: 0,
            errors: {
                password: 'Your password must be more than 6 characters !',
            },
        });
    }

    users.findOne({
        email: body.email
    })
        .then(user => {
            if (!user) {
                console.log("TCL REGISTER : user not exists")
                let finalUser = new users({
                    fullname: body.fullname,
                    email: body.email,
                    password: hashPassword(body.email, body.password)
                });
                // let token = jwt.sign(finalUser, process.env.SECRET_KEY, {
                //     expiresIn: 1440
                // })

                return finalUser.save()
                    .then(() => res.json({
                        data: finalUser,
                        type: 1
                    }))
                    // .then(() => {
                    //     res.send(token)
                    // })
                    .catch(err => {
                        res.json({ type: 0 })
                    });
            } else {
                res.json({ errors: 'User already exists', type: 0 })
            }
        })
        .catch(err => {
            res.json({ type: 0 })
        })


});

router.post('/login', (req, res, next) => {
    const { body } = req;
    if (!body.email) {
        return res.status(422).json({
            type: 0,
            errors: {
                email: 'Please enter a valid e-mail !',
            },
        });
    }
    if (!body.password) {
        return res.status(422).json({
            type: 0,
            errors: {
                password: 'Your password must be more than 6 characters !',
            },
        });
    }

    users.findOne({
        email: body.email
    })
        .then(user => {
            if (user) {
                if (hashPassword(body.email, body.password) === user.password) {
                    let token = jwt.sign({
                        ...user
                    }, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
                else {
                    res.json({
                        error: 'Password not match',
                        type: 0
                    })
                }
            } else {
                res.json({ error: 'User does not exist', type: 0 })
            }
        })
        .catch(err => {
            res.json({ type: 0 })
        })
});

router.get('/', (req, res, next) => {
    return users.find()
        .then((users) => res.json({
            type: 1,
            data: users
        }))
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
        user: req.user,
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
        .then(() => res.json({ user: req.user }))
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    return users.findByIdAndRemove(req.user.id)
        .then(() => res.sendStatus(200))
        .catch(next);
});

module.exports = router;