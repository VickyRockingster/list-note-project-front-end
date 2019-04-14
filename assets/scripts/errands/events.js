const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onDeleteErrand = (event) => {
  const errandId = $(event.target).closest('form').data('id')
  // event.stopPropogation()
  // console.log('from onDeleteErrand, this:' + this)
  // if (this.checked) {
  api.deleteErrand(errandId)
    .then(() => onGetErrands(event))
    .catch(ui.failure)
}

// const addDeleteErrandListener = function () {
//   // const deleteButton = document.querySelector('.delete-errand')
//   // deleteButton.addEventListener('submit', onDeleteErrand)
//   document.querySelector('.delete-errand').addEventListener('reset', onDeleteErrand)
// }

const onGetErrands = (event) => {
  api.getErrands()
    .then(ui.getErrandsSuccess)
    // .then(addDeleteErrandListener)
    .catch(ui.failure)
}

const formatCreateErrandData = function (event) {
  const formData = getFormFields(event.target)
  formData.errand.done_status === 'true' ? formData.errand.done_status = true
    : formData.errand.done_status = false
  return formData
}

const onCreateErrand = (event) => {
  event.preventDefault()
  const formData = formatCreateErrandData(event)
  api.createErrand(formData)
    .then(ui.createErrandSuccess)
    .then(() => { onGetErrands(event) })
    .catch(ui.failure)
}

const formatUpdateErrandData = function (event) {
  const formattedData = getFormFields(event.target)
  const errand = formattedData.errand
  const formattedErrand = {}

  Object.keys(errand).forEach(key => {
    switch (key) {
      case 'errand_name':
        if (errand['errand_name']) {
          formattedErrand.errand_name = errand['errand_name']
        }
        break
      case 'location':
        if (errand['location']) {
          formattedErrand.location = errand['location']
        }
        break
      case 'due_date':
        if (errand['due_date']) {
          formattedErrand.due_date = errand['due_date']
        }
        break
      case 'due_time':
        if (errand['due_time']) {
          formattedErrand.due_time = errand['due_time']
        }
        break
      case 'done_status':
        if (errand['done_status'] !== '') {
          errand.done_status === 'true' ? formattedErrand.done_status = true
            : formattedErrand.done_status = false
        }
    }
  })
  formattedData.errand = formattedErrand
  return formattedData
}

const onUpdateErrand = (event) => {
  event.preventDefault()

  const errandId = $(event.target).closest('form').data('id')
  const formData = formatUpdateErrandData(event)

  api.updateErrand(errandId, formData)
    .then(ui.updateErrandSuccess)
    .then(() => onGetErrands(event))
    .catch(ui.failure)
}

// $(`#${errandId}`).trigger('reset')

// const showAccountPage = (event) => {
//   event.preventDefault()
//   $('#my-lists').removeClass('hidden')
//   $('#account').addClass('hidden')
//   $('.my-lists-page').addClass('hidden')
//   $('.account-page').removeClass('hidden')
// }
//
// const showMyListsPage = (event) => {
//   event.preventDefault()
//   onGetErrands(event)
//   $('#my-lists').addClass('hidden')
//   $('#account').removeClass('hidden')
//   $('.my-lists-page').removeClass('hidden')
//   $('.account-page').addClass('hidden')
// }

const addHandlers = function () {
  // $('#account').on('submit', showAccountPage)
  // $('#my-lists').on('submit', showMyListsPage)
  $('#create-errand').on('submit', onCreateErrand)
  $('#get-errands').on('submit', '.errand', onUpdateErrand)
  $('#get-errands').on('reset', '.errand', onDeleteErrand)
}

module.exports = {
  addHandlers,
  onGetErrands
}
