const config = require('../config.js')
const store = require('../store.js')

const createErrand = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/errands`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateErrand = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + `/errands/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
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

const deleteErrand = (id) => {
  return $.ajax({
    url: config.apiUrl + `/errands/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createErrand,
  updateErrand,
  deleteErrand,
  getErrands
}
