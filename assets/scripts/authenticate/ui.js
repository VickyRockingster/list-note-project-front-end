const store = require('../store.js')

const signUpSuccess = function () {
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.email').text(store.user.email)
  $('.full-name').text(`${store.user.first_name} ${store.user.last_name}`)
  $('#user-feedback').text('You have successfully signed in!')
  $('#sign-in').trigger('reset')
  $('nav').removeClass('hidden')
  $('#account').addClass('hidden')
  $('.authentication').addClass('hidden')
  $('.account-page').removeClass('hidden')
  setTimeout(() => {
    $('#user-feedback').text('')
  }, 3000)
}

const signOutSuccess = function (data) {
  store.user = null
  $('#user-feedback').text('You have successfully signed out!')
  $('#sign-out').trigger('reset')
  setTimeout(() => {
    $('#user-feedback').text('')
  }, 3000)
}

const changePasswordSuccess = function () {
  $('#user-feedback').text('You have successfully changed passwords!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#user-feedback').text('')
  }, 3000)
}

const failure = function () {
  $('#user-feedback').text('There was an error processing your request. Please try again.')
  $('#user-feedback').addClass('error')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#user-feedback').text('')
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
