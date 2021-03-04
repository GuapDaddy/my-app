const knex = require('./../db');

exports.ingredientsAll = async (req, res) => {
    knex
        .select('*')
        .from('ingredient')
        .then(userData => {
            res.json(userData)
        })
}


exports.ingredientsCreate = async (res,req) => {
    knex('ingredients')
        .insert({
            'ingredient': req.body.ingredient,
            'quantity': req.body.quantity
        })
        .then(() => {
            res.json({ message: `ingredient \'${req.body.ingredient}\' quantity of ${req.body.quantity} created.` })
        })
        .catch(err => {
            res.json({message: `there was an error creating ${req.body.ingredient} ${err}`})
        })
}

exports.ingredientsDelete = async(req, res) => {
    knex('ingredient')
        .where('id', req.body.id)
        .del()
        .then(() => {
            res.json({message: `ingredient ${req.body.id} deleted`})
        })
}

exports.ingredientsReset = async (res, req) => 
    knex
        .select('*')
        .from('ingredient')
        .truncate()
        .then(() => {
            res.json({ message: `ingredients list cleared`})
        })
        .catch(err => {
            res.json({ message: `there was an error resetting ingredients list: ${err}`})
        })
