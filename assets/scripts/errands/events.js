const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store.js')

const onCreateErrand = (event) => {
  event.preventDefault()

  api.createErrand()
    .then(ui.createErrandSuccess)
    .catch(ui.failure)
}

const onUpdateErrand = (event) => {
  event.preventDefault()

  api.updateErrand()
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

  $('#my-lists').addClass('hidden')
  $('#account').removeClass('hidden')
  $('.my-lists-page').removeClass('hidden')
  $('.account-page').addClass('hidden')
}

const addHandlers = function () {
  $('#account').on('submit', showAccountPage)
  $('#my-lists').on('submit', showMyListsPage)
}

module.exports = {
  addHandlers
}
