import * as actionTypes from '../actions/actionTypes'

let INITIAL_STATE = {
  data: null
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.DIALOGUE_SUMMARY.FETCH_ALL_SUCCESS:
      return { data: action.payload.data }
    default:
      return state
  }
}

export default reducer
