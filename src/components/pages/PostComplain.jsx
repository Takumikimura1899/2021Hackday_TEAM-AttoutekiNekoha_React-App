import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

const PostComplain = () => {
  const [text, setText] = useState('');
  const [localStorageContents, setLocalStorageContents] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('contents')) {
      const getLocalStorageContents = localStorage.getItem('contents');
      setLocalStorageContents(JSON.parse(getLocalStorageContents));
    }
  }, []);

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
    localStorage.setItem('contents', JSON.stringify(newTodos));
    const getLocalStorageContents = localStorage.getItem('contents');
    setLocalStorageContents(JSON.parse(getLocalStorageContents));
    setText('');
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

export default PostComplain;
