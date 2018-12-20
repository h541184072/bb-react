const TYPE = {
  GET_DATA: 'MENU/GET_DATA'
}

const getMenuData = () => {
  return {
    type: TYPE.GET_DATA,
    payload: { menuData: [] }
  }
}

export {
  TYPE,
  getMenuData
}

