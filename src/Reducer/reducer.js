const initialState={
    darkTheme:false,
    counter:0
}
export function themeToggle(state=initialState, action){
  switch(action.type){
    case 'toggleTheme': return {...state, darkTheme: !state.darkTheme}
    case 'counterIncrement':return {...state,counter: state.counter+action.payload}
    default: return state
  }
}