const store = require('../store.js')

const signUpSuccess = function () {
  $('#user-feedback').html('You have successfully signed up!')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  $('#user-feedback').html('You have successfully signed in!')
  $('#sign-in').trigger('reset')
  store.user = data.user
}

const signOutSuccess = function (data) {
  $('#user-feedback').html('You have successfully signed out!')
  $('#sign-out').trigger('reset')
  store.user = null
}

const changePasswordSuccess = function () {
  $('#user-feedback').html('You have successfully changed passwords!')
  $('form').trigger('reset')
}

const failure = function () {
  $('#user-feedback').html('There was an error processing your request. Please try again.')
  $('#user-feedback').addClass('error')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#user-feedback').html('')
    $('#user-feedback').removeClass('error')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure
}
