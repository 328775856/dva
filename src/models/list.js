export default {
  namespace: 'list',
  state: [
    {name: 1, id: 1},
    {name: 2, id: 2},
  ],
  reducers: {
    'add'(state, {payload: index}) {
      state.push({name: state.length + 1, id: state.length + 1})
      return [...state]
    },
    'minus'(state, {payload: index}) {
      state.splice(index,1)
      return [...state]
    }
  }
}
