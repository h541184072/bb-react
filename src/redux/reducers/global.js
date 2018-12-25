import { TYPE } from '../actions/global'

const initState = {
  collapsed: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPE.Toggle_Collapsed:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
