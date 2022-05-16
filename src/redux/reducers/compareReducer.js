import {initialState} from "../store"
import { SET_FIRST_PLAYER } from "../actions"
import { SET_SECOND_PLAYER } from "../actions"

const PlayersToCompareReducer = (state = initialState.comparePlayers, action) => {
  switch (action.type) {
    case SET_FIRST_PLAYER:
      return   [ action.payload]

      case SET_SECOND_PLAYER:
      return  [...state, action.payload]

    default:
      return state
  }
}

export default PlayersToCompareReducer