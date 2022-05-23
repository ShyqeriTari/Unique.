import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import firstPlayerReducer from "../reducers/firstPlayerReducer"
import secondPlayerReducer from "../reducers/secondPlayerReducer"
import roleReducer from "../reducers/roleReducer"


const composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  firstPlayer: {},
  secondPlayer: {},
  role: {},
  
}

const mainReducer = combineReducers({
firstPlayer: firstPlayerReducer,
secondPlayer: secondPlayerReducer,
role: roleReducer,
})

const configureStore = createStore(
  mainReducer,
  initialState,
  composeFunction(applyMiddleware(thunk))
)

export default configureStore
