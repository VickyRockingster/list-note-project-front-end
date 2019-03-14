const store = require('../store.js')
// const getFormFields = require('../../../lib/get-form-fields.js')

const createErrandSuccess = function (data) {
}

const updateErrandSuccess = function (data) {
  store.errands = data.errands
}

const getErrandsSuccess = function (data) {
  store.errands = data.errands
}

const deleteErrandSuccess = function (data) {
  store.errands = data.errands
}

const failure = function () {
  $('#user-feedback').text('Something went wrong, please try again.')
  $('#user-feedback').addClass('error')
  setTimeout(() => {
    $('#user-feedback').text('')
    $('#user-feedback').removeClass('error')
  }, 3000)
}

module.exports = {
  createErrandSuccess,
  updateErrandSuccess,
  getErrandsSuccess,
  deleteErrandSuccess,
  failure
}
