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
        <section className="section box has-background-grey-dark box-radius-3">
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="field columns is-grouped is-grouped-centered"
          >
            <input
              type="text"
              value={text}
              onChange={onChange}
              placeholder="あなたの愚痴をお聞かせください"
              className="column ml-6 "
            />
            <button
              type="submit"
              value="追加"
              onSubmit={(e) => e.preventDefault()}
              className="ml-3 mr-5 button is-success is-outlined is-outlined is-medium is-rounded"
            >
              投稿
            </button>
          </form>
        </section>

  <div className="posts">
    <div className="columns text is-grouped is-flex is-justify-content-center is-vcentered is-centered">
      {localStorageContents.map((todo) => {
        return (
          <p
            className="box column is-5 ml-6 has-text-centered mb-2 mr-1"
            key={todo.id}
          >
            {todo.value}
          </p>
        );
      })}
    </div>
  </div>

  </section>
  );
};

export default PostComplain;
