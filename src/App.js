import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from './Actions/action';

function App() {
  const dispatch= useDispatch();
  const isDark=useSelector((state)=> state.darkTheme);
  return (
    <div className={`${isDark?'dark_theme':'light_theme'} App`}>
      <button onClick={async()=> await dispatch({type:'toggleTheme'})}>Theme Toggle</button>
    <button onClick={async()=> await dispatch({type:'counterIncrement', payload:100})}>Counter 100</button>
    <button onClick={async()=> await dispatch(actionCreator())}>Fetch Data</button>
    </div>
  );
}

export default App;
