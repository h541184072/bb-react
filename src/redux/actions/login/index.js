const axios = {}

const TYPE = {
  CHANGE_INPUT: 'CHANGE_INPUT'
}

const changeInput = (name, val) => ({
  type: TYPE.CHANGE_INPUT,
  payload: {
    [name]: val
  }
})

const userLogin = ({username, password, type, success}) => {
  return dispatch => {
    axios.getAjax({
      url: 'api/login/account',
      data: {
        username,
        password,
        type
      }
    }).then(response => {
      if (response.code === 0) {
        window.localStorage.setItem('isLogin', true)
        window.localStorage.setItem('authToken', response.data.token)
        window.localStorage.setItem('username', response.data.currentAuthority)
        // connetctSocket()
        window.location.href = '/'
        success && success()
      } else if (response.code === 1) {
        console.error('error')
      }
    })
  }
}

export {
  changeInput,
  userLogin,
  TYPE
}
