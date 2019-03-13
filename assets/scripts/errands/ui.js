const store = require('../store.js')
// const getFormFields = require('../../../lib/get-form-fields.js')

const createErrandSuccess = function (data) {
}

const updateErrandSuccess = function (data) {
}

const getErrandsSuccess = function (data) {
  store.errands = data.errands
}

const failure = function () {
  $('#user-feedback').html('Something went wrong, please try again.')
  $('#user-feedback').addClass('error')
  setTimeout(() => {
    $('#user-feedback').html('')
    $('#user-feedback').removeClass('error')
  }, 3000)
}

module.exports = {
  createErrandSuccess,
  updateErrandSuccess,
  getErrandsSuccess,
  failure
}
