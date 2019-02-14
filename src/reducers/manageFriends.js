export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {friends: [...state.friends.slice(0, state.friends.indexOf(action.friend)-1), ...state.friends.slice((state.friends.indexOf(action.friend)+3), state.friends.length) ]}
      break;
    default:
      return state
  }
}
