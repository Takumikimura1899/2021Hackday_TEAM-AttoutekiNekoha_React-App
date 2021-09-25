import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import PostComplain from './components/organisms/PostComplain';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [text, setText] = useState('');
  const [localStorageContents, setLocalStorageContents] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('contents')) {
      const getLocalStorageContents = localStorage.getItem('contents');
      setLocalStorageContents(JSON.parse(getLocalStorageContents));
    }
  }, []);

  const clear =()=>{
    localStorage.clear()
  }

  return (
    <div className="App mx-6 ">
      <section className="section">
        <div className="container m-auto mx-5">
          <h1 className="title ">
            あなたの心に、<strong>チャッカマン。</strong>
          </h1>
        </div>
      </section>

      <PostComplain />

      <section className="section">
        <div className="bomb is-grouped is-grouped-centered">
          <button className="bomb button is-danger is-clickable is-rounded">
            <Link to="/explosion">爆破</Link>
          </button>
          <button onClick={clear} className="mt-2 clear button column is-medium is-primary is-outlined">RESET</button>
        </div>
      </section>
    </div>
  );
};

export default App;
