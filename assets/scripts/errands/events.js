const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const formatCreateErrandData = function (event) {
  const formData = getFormFields(event.target)
  if (formData.errand.done_status === 'true') {
    formData.errand.done_status = true
  } else {
    formData.errand.done_status = false
  }
  return formData
}

const onCreateErrand = (event) => {
  event.preventDefault()

  const formData = formatCreateErrandData(event)
  console.log('formData:' + formData)
  console.log('formData:' + formData)

  api.createErrand(formData)
    .then(ui.createErrandSuccess)
    .catch(ui.failure)
}

const onUpdateErrand = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.updateErrand(formData.errand.id, formData)
    .then(ui.createErrandSuccess)
    .catch(ui.failure)
}

const onGetErrands = (event) => {
  event.preventDefault()

  api.getErrands()
    .then(ui.getErrandsSuccess)
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
  $('#update-errand').on('submit', onUpdateErrand)
}

module.exports = {
  addHandlers
}
