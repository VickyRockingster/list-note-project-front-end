const store = require('../store.js')
const getBooksTemplate = require('../templates/get-errands-template.handlebars')
// const getFormFields = require('../../../lib/get-form-fields.js')

const createErrandSuccess = function (data) {
  $('#create-errand').trigger('reset')
}

const getErrandsSuccess = function (data) {
  store.errands = data.errands
  const formatErrandsHtml = getBooksTemplate({errands: store.errands})
  $('#get-errands').html(formatErrandsHtml)
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
  getErrandsSuccess,
  failure
}
