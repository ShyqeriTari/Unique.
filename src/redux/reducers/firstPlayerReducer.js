import {initialState} from "../store"
import { SET_FIRST_PLAYER } from "../actions"

const firstPlayerReducer = (state = initialState.firstPlayer, action) => {
  switch (action.type) {
    case SET_FIRST_PLAYER:
      return    action.payload


    default:
      return state
  }
}

export default firstPlayerReducer