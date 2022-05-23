import {initialState} from "../store"
import { SET_ROLE} from "../actions"

const roleReducer = (state = initialState.role, action) => {
  switch (action.type) {
    case SET_ROLE:
      return    action.payload


    default:
      return state
  }
}

export default roleReducer