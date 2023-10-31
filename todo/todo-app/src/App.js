import logo from './logo.svg';
import './App.css';

import AddTodo from './components/AddTodo';
import ShowTodo from './components/ShowTodo';

function App() {
  return (

    <>
      <h1 style={{ textAlign: 'center' }}>Todo App</h1>

      <AddTodo />
      <hr/>
      <ShowTodo/>


    </>
  );
}

export default App;
