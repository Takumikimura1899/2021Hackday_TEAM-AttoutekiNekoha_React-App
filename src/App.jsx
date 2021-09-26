import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import PostComplain from './components/organisms/PostComplain';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const clear = () => {
  localStorage.clear();
};

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
  console.log(localStorageContents.length);

  return (
    <div className="App">
      <section className="section top"></section>
      <section className="container picture">
        <PostComplain />

        <section className="fixed section">
          <div className="buttons columns is-flex is-flex-direction-column is-justify-content-center ">
            <Link
              to="/explosion"
              className="has-text-weight-light exprode is-danger is-outlined column is-medium button"
            >
              爆破
            </Link>
          </div>
        </section>
      </section>

      <section className="section footer volum">
      <div className="foot is-flex is-justify-content-center is-align-items-center">
        <p className="foot-name is-size-7 has-text-weight-light">
          © 2021 あなたの心に、チャッカマン。All Rights Reserved.
        </p>
      </div>
    </section>
    </div>
  );
};

export default App;
