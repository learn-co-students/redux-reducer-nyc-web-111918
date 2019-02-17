export function manageFriends(state, action){
  if (action.type === "ADD_FRIEND"){
    return ({...state, friends: [...state.friends, action.friend]})
  } else if (action.type === 'REMOVE_FRIEND'){
    const newlist = state.friends.filter( friend => {
      console.log(friend.id, "state")
      return friend.id !== action.id
    })
    return {...state, friends: newlist}
  } else {
    return state
  }
}
