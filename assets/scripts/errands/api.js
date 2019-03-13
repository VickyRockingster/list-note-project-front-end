const config = require('../config.js')
const store = require('../store.js')

const createErrand = () => {
  return $.ajax({
    url: config.apiUrl + `/errands`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateErrand = (id) => {
  return $.ajax({
    url: config.apiUrl + `/errands/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: newMove
  })
}

const getErrands = () => {
  return $.ajax({
    url: config.apiUrl + `/errands`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createErrand,
  updateErrand,
  getErrands
}
