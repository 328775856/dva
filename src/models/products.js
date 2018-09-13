export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      console.log(id)
      return state.filter(item => item.id !== id)
    },
    'add'(state, {payload: id}) {
      let num = state.length
      let newState = {
        name: num,
        id: num + 1
      }
      return [...state, newState]
    }
  }
}
