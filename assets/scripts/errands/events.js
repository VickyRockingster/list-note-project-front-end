const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetErrands = (event) => {
  api.getErrands()
    .then(ui.getErrandsSuccess)
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
  formattedData.errand = formattedErrand
  // formattedData.errand.done_status === 'true' ? formattedData.errand.done_status = true
  //   : formattedData.errand.done_status = false
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
          formattedErrand.done_status === 'true' ? formattedErrand.done_status = true
            : formattedErrand.done_status = false
        }
    }
  })
  return formattedData
}

const onUpdateErrand = (event) => {
  event.preventDefault()

  const errandId = $(event.target).closest('form').data('id')
  const formData = formatUpdateErrandData(event)

  // $(`#${errandId}`).trigger('reset')
  api.updateErrand(errandId, formData)
    .then(ui.updateErrandSuccess)
    .then(() => onGetErrands(event))
    .catch(ui.failure)
}

const onDeleteErrand = (event) => {
  event.preventDefault()
  const errandId = $(event.target).closest('form').data('id')
  api.deleteErrand(errandId)
    .then(() => onGetErrands(event))
    .catch(ui.failure)
}

const showAccountPage = (event) => {
  event.preventDefault()
  $('#my-lists').removeClass('hidden')
  $('#account').addClass('hidden')
  $('.my-lists-page').addClass('hidden')
  $('.account-page').removeClass('hidden')
}

const showMyListsPage = (event) => {
  event.preventDefault()
  onGetErrands(event)
  $('#my-lists').addClass('hidden')
  $('#account').removeClass('hidden')
  $('.my-lists-page').removeClass('hidden')
  $('.account-page').addClass('hidden')
}

const addHandlers = function () {
  $('#account').on('submit', showAccountPage)
  $('#my-lists').on('submit', showMyListsPage)
  $('#create-errand').on('submit', onCreateErrand)
  $('#get-errands').on('submit', '.errand', onUpdateErrand)
  $('#get-errands').on('indeterminate', '.errand', onDeleteErrand)
}

module.exports = {
  addHandlers
}
