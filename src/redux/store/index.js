import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import PlayersToCompareReducer from "../reducers/compareReducer"


const composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  comparePlayers: [],
  
}

const mainReducer = combineReducers({
comparedPlayers: PlayersToCompareReducer
})

const configureStore = createStore(
  mainReducer,
  initialState,
  composeFunction(applyMiddleware(thunk))
)

export default configureStore
