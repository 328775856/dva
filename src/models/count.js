export default {
  namespace: 'count',
  state: 2,
  reducers: {
    'delete'(state,action) {
      return state - 1
    },
    'add'(state) {
      return state + 1
    }
  }
}
