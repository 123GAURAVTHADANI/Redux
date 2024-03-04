const initialState={
    darkTheme:false,
    counter:0,
    dataList:[]
}
export function themeToggle(state=initialState, action){
  console.log(action.payload);
  switch(action.type){
    case 'toggleTheme': return {...state, darkTheme: !state.darkTheme}
    case 'counterIncrement':return {...state,counter: state.counter+action.payload}
    case 'add_to_data': return {...state, dataList:action.payload}
    default: return state
  }
}