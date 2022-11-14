export const state = () => ({
  users: [
    {
      email: 'gwi01304@naver.com',
      age: 29,
      txt: '안녕하세요',
    },
  ],
})

export const getters = {}
export const actions = {
  getUsers() {
    // commit('addUsers', users)
    return state.users
  },
}
export const mutations = {
  addUsers(state, users) {
    state.users.push({ ...users })
  },
  deleteItem(state, user) {
    state.users = state.users.filter((item) => {
      return item.email !== user.email
    })
  },
}
