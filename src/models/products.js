export default {
  namespace: 'products',
  state: [
    {name: 'dva', id: 1},
    {name: '1', id: 2},
    {name: '2', id: 3},
    {name: '3', id: 4},
  ],
  reducers: {
    'delete'(state, {payload: id}) {
      console.log(id)
      return state.filter(item => item.id !== id)
    },
    'add'(state, {payload: id}) {
      // let num = state.length
      // let newState = {
      //   name: num,
      //   id: num + 1
      // }
      // return [...state, newState]
      state.push({name:1, id:1})
      return [...state]
    }
  }
}
