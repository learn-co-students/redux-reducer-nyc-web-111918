
export function manageFriends(state = {friends: []}, action){
  if (action.type === "ADD_FRIEND"){
    return {...state, friends: [...state.friends, action.friend]}
  } else if (action.type === "REMOVE_FRIEND"){
    const newFriends = [...state.friends].filter(friend => friend.id !== action.id)
    return {friends: newFriends}
  } else {
    return state
  }
}
