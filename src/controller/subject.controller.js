const service = require('../service/subject.service')

const create = (req, res) => {
    if (req.body.name && req.body.workload && req.body.teacherName) {
        service.create(req.body)
        res.status(200).send('Subject successfully created!')
    } 
    else {
        res.status(400).send('Cannot create subject! Something is wrong.')
    }
}

const listAll = (req, res) => {
    res.send(service.listAll())
}

const list = (req, res) => {
    service.list(req.params.id)
    res.send(service.list(req.params.id))
}

const update = (req, res) => {
    service.update(req.params.id, req.body)
    res.send('Subject updated successfully!')
}

const remove = (req, res) => {
    service.remove(req.params.id)
    res.send('Subject successfully removed!')
}

module.exports = {
    create,
    listAll,
    list,
    update,
    remove
}