const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')
const errandEvents = require('../errands/events.js')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .then(() => {
      authApi.signIn(data)
        .then(authUi.signInSuccess)
        .then(errandEvents.showAccountPage)
    })
    .catch(authUi.failure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.failure)
    .then(errandEvents.showAccountPage)
}

const onSignOut = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signOut(data)
    .then(authUi.signOutSuccess)
    .catch(authUi.failure)
    .then(() => {
      $('nav').addClass('hidden')
      $('section').addClass('hidden')
      $('.authentication').removeClass('hidden')
    })
}

const onChangePassword = (event) => {
  event.preventDefault()
  const passwords = getFormFields(event.target)

  authApi.changePassword(passwords)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.failure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
