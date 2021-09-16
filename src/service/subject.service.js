const database = []

const create = subject => {
    subject.id = Date.now()
    database.push(subject)
}

const listAll = () => database

const list = subjectId => {
    const subjectIndex = database.findIndex(
        subject => subject.id == subjectId
    )

    if (subjectIndex == subjectId) {
        database[subjectIndex]
      }
}

const update = (subjectId, subject) => {
    const subjectIndex = database.findIndex(
      subjectOld => subjectOld.id == subjectId
    )
  
    if (subjectIndex != -1) {
      database[subjectIndex] = subject
    }
}

const remove = subjectId => {
    const subjectIndex = database.findIndex(
      subject => subject.id == subjectId
    )
  
    if (subjectIndex != -1) {
      database.splice(subjectIndex, 1)
    }
}

module.exports = {
    create,
    listAll,
    list,
    update,
    remove
  }