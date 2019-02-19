export function manageFriends(state={friends: [{ name: 'Avi', hometown: 'NYC', id: 100 } ]}
, action){

  switch(action.type){
    case 'ADD_FRIEND':
    return (
      {...state,
      friends:[
        ...state.friends,
        action.friend
      ]}
    )
    case 'REMOVE_FRIEND':
    const findFriend = state.friends.findIndex(friend => friend.id === action.id)
    return (
      {
        ...state,
        friends:[
          ...state.friends.slice(0, findFriend),
          ...state.friends.slice(findFriend + 1),

        ]
      }
    )
    default:
    return state;
  }


}
