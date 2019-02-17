export function manageFriends(state, action){
  if (action.type === "ADD_FRIEND"){
    return ({ friends: [...state.friends, action.friend]})
  } else if (action.type === 'REMOVE_FRIEND'){
    const newlist = state.friends.filter( friend => {
      return friend.id !== action.id
    })
    return {friends: newlist}
  } else {
    return state
  }
}
