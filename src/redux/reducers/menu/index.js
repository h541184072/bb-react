import { TYPE } from '../../actions/menu'

const initState = {
  menuData: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPE.GET_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
