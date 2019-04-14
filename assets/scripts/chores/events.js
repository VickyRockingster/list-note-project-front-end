const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onDeleteChore = (event) => {
  const choreId = $(event.target).closest('form').data('id')
  // event.stopPropogation()
  // console.log('from onDeleteErrand, this:' + this)
  // if (this.checked) {
  api.deleteChore(choreId)
    .then(() => onGetChores(event))
    .catch(ui.failure)
}

const onGetChores = (event) => {
  api.getChores()
    .then(ui.getChoresSuccess)
    // .then(addDeleteErrandListener)
    .catch(ui.failure)
}

const formatCreateChoreData = function (event) {
  const formData = getFormFields(event.target)
  formData.chore.done_status === 'true' ? formData.chore.done_status = true
    : formData.chore.done_status = false
  return formData
}

const onCreateChore = (event) => {
  event.preventDefault()
  const formData = formatCreateChoreData(event)
  api.createChore(formData)
    .then(ui.createChoreSuccess)
    .then(() => { onGetChores(event) })
    .catch(ui.failure)
}

const formatUpdateChoreData = function (event) {
  const formattedData = getFormFields(event.target)
  const chore = formattedData.chore
  const formattedChore = {}

  Object.keys(chore).forEach(key => {
    switch (key) {
      case 'chore_name':
        if (chore['chore_name']) {
          formattedChore.chore_name = chore['chore_name']
        }
        break
      case 'due_date':
        if (chore['due_date']) {
          formattedChore.due_date = chore['due_date']
        }
        break
      case 'due_time':
        if (chore['due_time']) {
          formattedChore.due_time = chore['due_time']
        }
        break
      case 'done_status':
        if (chore['done_status'] !== '') {
          chore.done_status === 'true' ? formattedChore.done_status = true
            : formattedChore.done_status = false
        }
    }
  })
  formattedData.chore = formattedChore
  return formattedData
}

const onUpdateChore = (event) => {
  event.preventDefault()

  const choreId = $(event.target).closest('form').data('id')
  const formData = formatUpdateChoreData(event)

  api.updateChore(choreId, formData)
    // .then(ui.updateChoreSuccess)
    .then(() => onGetChores(event))
    .catch(ui.failure)
}

const addHandlers = function () {
  // $('#my-lists').on('submit', showMyListsPage)
  $('#create-chore').on('submit', onCreateChore)
  $('#get-chores').on('submit', '.chore', onUpdateChore)
  $('#get-chores').on('reset', '.chore', onDeleteChore)
}

module.exports = {
  addHandlers,
  onGetChores
}
