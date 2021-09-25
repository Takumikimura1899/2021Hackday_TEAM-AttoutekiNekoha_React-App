import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

import './App.css';

const App = () => {
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
    <>
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">ペーパーレス爆破</h1>
            <p className="subtitle">
              <strong>CO2</strong>も出しません。
            </p>
          </div>
        </section>

        <section className="section">
          <div className="field columns is-grouped is-grouped-centerd">
            <p className="form-label">不満</p>
            <input className="column" />
            <button type="button" className="button is-primary is-medium">
              投稿
            </button>
          </div>
        </section>

        <section className="section">
          <div className="posts">
            <div className="text is-grouped is-centerd">
              <p>sample</p>
              <p>sample</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="bomb is-grouped is-grouped-centerd">
            <button className="button is-danger">爆破</button>
          </div>
        </section>
      </div>
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
    </>
  );
};

export default App;
