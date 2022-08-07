import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

export const getters = {
  activeUser: (state, getters) => {
    return state.user
  }
}

export const actions = {
  signInWithGoogle({ commit }) {
    return new Promise((resolve, reject) => {
      auth.signInWithRedirect(GoogleProvider)
      resolve()
    })
  },
  signOut({ commit }) {
    auth.signOut().then(() => {
      commit('setUser', null)
    }).catch(err => console.log(error))
  }
}