'use strict'

const authEvents = require('./authenticate/events.js')
const errandEvents = require('./errands/events.js')
const choreEvents = require('./chores/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  errandEvents.addHandlers()
  choreEvents.addHandlers()
  $('#my-lists-button').on('submit', (event) => {
    event.preventDefault()
    choreEvents.onGetChores(event)
    errandEvents.onGetErrands(event)
    $('#my-lists-button').hide()
    $('#account-button').show()
    $('.my-lists-page').show()
    $('.account-page').hide()
  })
  $('#account-button').on('submit', (event) => {
    event.preventDefault()
    $('#my-lists-button').show()
    $('#account-button').hide()
    $('.my-lists-page').hide()
    $('.account-page').show()
  })
})
