export default {
  namespace: 'list',
  state: [],
  reducers: {
    'add'(state, {payload: index}) {
      // let newState = {name: state.length + 1, id: state.length + 1}
      // return [...state, newState]
      state.push({name: state.length + 1, id: state.length + 1})
      console.log([...state] == state)
      return [...state]
    },
    'minus'(state, {payload: index}) {
      state.splice(index,1)
      return [...state]
    }
  }
}
