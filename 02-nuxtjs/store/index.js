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
//Action의 역할 - 비동기 동기 구분이 필요한 로직을 mutations에서 파악하기 힘들기 때문에 action에서 async await 등을 사용하도록 한다.
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
