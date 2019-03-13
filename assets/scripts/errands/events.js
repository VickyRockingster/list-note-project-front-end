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

  $('nav').removeClass('hidden')
  $('#account').addClass('hidden')
  $('section').addClass('hidden')
  $('.account-page').removeClass('hidden')
}

const showMyListsPage = (event) => {
  event.preventDefault()

  $('nav').removeClass('hidden')
  $('#my-lists').addClass('hidden')
  $('section').addClass('hidden')
  $('.my-lists-page').removeClass('hidden')
}

const showCreateListsPage = (event) => {
  event.preventDefault()

  $('nav').removeClass('hidden')
  $('#create-lists').addClass('hidden')
  $('section').addClass('hidden')
  $('.create-lists-page').removeClass('hidden')
}

const addHandlers = function () {
  $('#account').on('submit', showAccountPage)
  $('#my-lists').on('submit', showMyListsPage)
  $('#create-lists').on('submit', showCreateListsPage)
}

module.exports = {
  addHandlers
}
