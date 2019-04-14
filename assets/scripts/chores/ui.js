const store = require('../store.js')
const getChoresTemplate = require('../templates/get-chores-template.handlebars')
// const getFormFields = require('../../../lib/get-form-fields.js')

const createChoreSuccess = function (data) {
  $('#create-chore').trigger('reset')
}

const getChoresSuccess = function (data) {
  store.chores = data.chores
  const formatChoresHtml = getChoresTemplate({chores: store.chores})
  $('#get-chores').html(formatChoresHtml)
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
  createChoreSuccess,
  getChoresSuccess,
  failure
}
