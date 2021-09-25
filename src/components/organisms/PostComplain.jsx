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
    <section>
      <div className="form-size section box has-background-grey-dark is-flex is-justify-content-center m-auto">
        <form action="submit" onSubmit={handleSubmit} className="field columns is-flex is-vcentered">
          <input type="text" value={text} onChange={onChange} placeholder="愚痴を、どうぞ。"className="input column ml-6 is-success"/>
          <button value="追加" onSubmit={(e) => e.preventDefault()}  type="submit" className="postBtn ml-3 mr-5 button is-success is-outlined is-normal is-rounded">追加</button>
        </form>
      </div>

      <section className="section">
        <div className="posts">
          <div className="columns text is-grouped is-flex is-flex-wrap-wrap is-flex-direction-column is-align-items-center is-centered">
            {localStorageContents.map((todo) => {
              return <p className="box column is-5 has-text-centered mb-2 is-full" key={todo.id}>{todo.value}</p>;
            })}
          </div>
        </div>
      </section>

  </section>
  );
};

export default PostComplain;
