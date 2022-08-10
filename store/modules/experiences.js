// export const namespaced = true

// import Vuex from 'vuex'
// import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'

export const state = () => ({
  // user: null,
  experiences: [{
    company: 'testing1234'
  }],
  experience: {}
})

export const mutations = {
  // setUser(state, payload) {
  //   state.user = payload
  // },
  CREATE_EXPERIENCE(state, experience) {
    state.experiences.push(experience)
  },
  SET_EXPERIENCES(state, experiences) {
    state.experiences = experiences
  },
  SET_EXPERIENCE(state, experience) {
    state.experience = experience
  },
  DELETE_EXPERIENCE(state, experience) {
    var index = state.experiences.findIndex(
      (s) => s.id == experience.id
    )
    state.experiences.splice(index, 1)
  },
}

export const getters = {
  // activeUser: (state, getters) => {
  //   return state.user
  // }
  getExperiences: (state, getters) => {
    return state.experiences
  }
}

export const actions = {
  // signInWithGoogle({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     auth.signInWithRedirect(GoogleProvider)
  //     resolve()
  //   })
  // },
  // signOut({ commit }) {
  //   auth.signOut().then(() => {
  //     commit('setUser', null)
  //   }).catch(err => console.log(error))
  // }
}

