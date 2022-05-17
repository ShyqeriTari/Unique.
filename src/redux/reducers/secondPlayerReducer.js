import {initialState} from "../store"
import { SET_SECOND_PLAYER } from "../actions"

const secondPlayerReducer = (state = initialState.secondPlayer, action) => {
  switch (action.type) {
    case SET_SECOND_PLAYER:
      return    action.payload


    default:
      return state
  }
}

export default secondPlayerReducer