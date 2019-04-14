const config = require('../config.js')
const store = require('../store.js')

const createChore = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/chores`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateChore = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + `/chores/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getChores = () => {
  return $.ajax({
    url: config.apiUrl + `/chores`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteChore = (id) => {
  return $.ajax({
    url: config.apiUrl + `/chores/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createChore,
  updateChore,
  deleteChore,
  getChores
}
