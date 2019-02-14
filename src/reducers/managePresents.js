export function managePresents(state, action){

  switch(action.type){
    case 'INCREASE':
      return {numberOfPresents: 1}
      break
  }

  return state
}
