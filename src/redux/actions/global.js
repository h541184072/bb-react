const TYPE = {
  Toggle_Collapsed: 'GLOBAL/TOGGLE_COLLAPSED',
}

const changeLayoutCollapsed = (bool) => {
  return {
    type: TYPE.Toggle_Collapsed,
    payload: {
      collapsed: bool,
    },
  }
}

export {
  TYPE,
  changeLayoutCollapsed,
}
