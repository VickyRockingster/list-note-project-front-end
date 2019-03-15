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
    .then(() => {
      onGetErrands(event)
    })
    .catch(ui.failure)
}

const formatUpdateErrandData = function (event, id) {
  const formattedData = getFormFields(event.target)
  console.log('formattedData:' + JSON.stringify(formattedData))
  console.log('store.errands:' + JSON.stringify(store.errands))

  for (let i = 0; i < store.errands.length; i++) {
    if (id === store.errands[i]) {
      if (formattedData.errand_name === '') {
        formattedData.errand_name = store.errand.errand_name
      }
      if (formattedData.location === '') {
        formattedData.location = store.errand.location
      }
      if (!(formattedData.due_date)) {
        formattedData.due_date = store.errand.due_date
      }
      if (!(formattedData.due_time)) {
        formattedData.due_time = store.errand.due_time
      }
    }
  }
  return formattedData
}

const onUpdateErrand = (event) => {
  event.preventDefault()

  const errandId = $(event.target).closest('form').data('id')
  const formData = formatUpdateErrandData(event, errandId)
  console.log('formData:' + JSON.stringify(formData))

  $(`#${errandId}`).trigger('reset')
  api.updateErrand(errandId, formData)
    .then(ui.updateErrandSuccess)
    .then(() => {
      onGetErrands(event)
    })
    .catch(ui.failure)
}

const onDeleteErrand = (event) => {
  event.preventDefault()
  const errandId = $(event.target).closest('form').data('id')
  api.deleteErrand(errandId)
    .then(() => {
      onGetErrands(event)
    })
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
  $('#get-errands').on('change', '.errand', onDeleteErrand)
}

module.exports = {
  addHandlers
}
