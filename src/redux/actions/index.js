export const SET_FIRST_PLAYER= "SET_FIRST_PLAYER"
export const SET_SECOND_PLAYER= "SET_SECOND_PLAYER"
export const SET_ROLE= "SET_ROLE"

export const setFirstPlayerAction = player => ({
  type: SET_FIRST_PLAYER,
  payload: player,
})

export const setSecondPlayerAction = player => ({
  type: SET_SECOND_PLAYER,
  payload: player,
})

export const setRoleAction = role => ({
  type: SET_ROLE,
  payload: role,
})