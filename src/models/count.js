export default {
  namespace: 'count',
  state: [],
  reducers: {
    'delete'(state,action) {
      console.log(action)
      return state - 1
    },
    'add'(state) {
      return state + 1
    }
  }
}
