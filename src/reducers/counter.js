import { ADD_VALUE, MINUS_VALUE, INIT_VALUE } from '../actions/actionTypes'

//放state
// action = { type: 'ADD_VALUE', value: 1 }
// action = { type: 'MINUS_VALUE', value: 1 }
export default function counter(state = 0, action) {
  switch (action.type) {
    case ADD_VALUE:
      return state + action.value
    case MINUS_VALUE:
      return state - action.value
    case INIT_VALUE:
      return action.value
    default:
      return state
  }
}
