import axios from 'axios'

function getCity () {
  return axios.get('/api/city.json')
}
function getIndex () {
  return axios.get('/api/index.json')
}

export default {
  getCity,
  getIndex
}
