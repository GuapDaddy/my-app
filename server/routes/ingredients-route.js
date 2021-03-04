const express = require('express')

const ingredientsRoutes = require ('./../controllers/ingredients-controller.js')

const router = express.Router()

router.get('/all', ingredientsRoutes.ingredientsAll)

router.post('/create', ingredientsRoutes.ingredientsCreate)

router.put('/delete', ingredientsRoutes.ingredientsDelete)

router.put('/reset', ingredientsRoutes.ingredientsReset)

module.exports = router