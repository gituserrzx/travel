import axios from 'axios'

function getCity () {
  return axios.get('/api/city.json')
}
function getIndex () {
  return axios.get('/api/index.json')
}
function getDetail (params) {
  return axios.get('api/detail.json', params)
}
export default {
  getCity,
  getIndex,
  getDetail
}
