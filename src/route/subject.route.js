const express = require('express')
const router = express.Router()
const controller = require('../controller/subject.controller')

router.post('/', controller.create)
router.get('/', controller.listAll)
router.get('/:id', controller.list)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router