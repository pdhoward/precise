import axios from 'axios'

export default (url) => {
  return axios({
    method: 'get',
    baseURL: url
  }).then(function (obj) {
    // handle success
    return obj.data
  })
    .catch(function (error) {
    // handle error
      console.log(error)
    })
    .finally(function () {
    // always executed
    })
}
