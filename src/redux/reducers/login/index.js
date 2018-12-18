import { TYPE } from '../../actions/login'

const initState = {
  username: '',
  password: '',
  submited: false
}

export default (state = initState, action) => {
  state = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case TYPE.CHANGE_INPUT:
      var payload = action.payload
      return Object.assign({}, {
        ...state,
        ...payload
      })
    default:
      return state
  }
}
