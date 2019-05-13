import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      words: ['precise', 'healthy'],
      wordMeaning: 'No definition'
    },
    mutations: {
      addWord (state, word) {
        state.words.push(word)
      },
      deleteWord (state, word) {
        state.words = state.words.filter(obj => obj.headword !== word)
      },
      addMeaning (state, def) {
        state.wordMeaning = def
      }
    },
    getters: {
      WORDS: state => {
        return state.words
      }
    }
  }
)
