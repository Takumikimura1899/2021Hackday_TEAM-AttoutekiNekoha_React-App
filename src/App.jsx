import { useState, useRef } from 'react';
import 'bulma/css/bulma.min.css';
import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-canvas';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const [localStorageContents, setLocalStorageContents] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) return;

    const newTodo = {
      value: text,
      id: new Date().getTime(),
    };

    const newTodos = [newTodo, ...localStorageContents];
    // console.log(todos);
    setText('');
    localStorage.setItem('contents', JSON.stringify(newTodos));
    // console.log(localStorage.getItem('contents'));
    console.log(localStorageContents);
    const getLocalStorageContents = localStorage.getItem('contents');
    setLocalStorageContents(JSON.parse(getLocalStorageContents));
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <input type="submit" value="追加" onSubmit={(e) => e.preventDefault()} />
        <ul>
          {localStorageContents.map((todo) => {
            return <li key={todo.id}>{todo.value}</li>;
          })}
        </ul>
      </form>
    </div>
  );
};

export default App;
