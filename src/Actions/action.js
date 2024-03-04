import axios from "axios"

export function actionCreator(){
    return dispatch => {
      axios.get('https://jsonplaceholder.typicode.com/todos').then((res) =>{
        dispatch({type:'add_to_state', payload:res.data})
      }).catch((err) => console.log(err))
    }
}