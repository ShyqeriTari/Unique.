import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import firstPlayerReducer from "../reducers/firstPlayerReducer"
import secondPlayerReducer from "../reducers/secondPlayerReducer"


const composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  firstPlayer: {},
  secondPlayer: {},
  
}

const mainReducer = combineReducers({
firstPlayer: firstPlayerReducer,
secondPlayer: secondPlayerReducer
})

const configureStore = createStore(
  mainReducer,
  initialState,
  composeFunction(applyMiddleware(thunk))
)

export default configureStore
