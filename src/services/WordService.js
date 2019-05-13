import Api from '@/services/Api'

export default {
  getWord (params) {
    let urlBase = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
    let wordChoice = params.word
    let keyValue = 'f7c591d4-03b2-457a-b4ad-357fa9ac801e'
    let url = urlBase + wordChoice + '?key=' + keyValue
    return Api(`${url}`)
  },
  getWordDetails (params) {
    let urlBase = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
    let wordChoice = params
    let keyValue = 'f7c591d4-03b2-457a-b4ad-357fa9ac801e'
    let url = urlBase + wordChoice + '?key=' + keyValue
    return Api(`${url}`)
  }
}
