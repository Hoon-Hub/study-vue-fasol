export const state = () => ({
  users: [
    {
      email: 'gwi01304@naver.com',
      age: 29,
      txt: '안녕하세요',
    },
  ],
})

export const getters = {
  users: (state) => state.users,
  user: (state) => (index) => {
    return state.users[index]
  },
}
export const actions = {
  updateOneUser(context, obj) {
    context.commit('updateOneUser', obj)
  },
  deleteOneUser(context, obj) {
    context.commit('deleteOneUser', obj)
  },
}
export const mutations = {
  addUsers(state, users) {
    state.users.push({ ...users })
  },
  deleteOneUser(state, user) {
    state.users = state.users.filter((item) => {
      return item.email !== user.email
    })
  },
  updateOneUser(state, obj) {
    Object.assign(state.users[obj.itemNum], obj.dataObj)
  },
}
