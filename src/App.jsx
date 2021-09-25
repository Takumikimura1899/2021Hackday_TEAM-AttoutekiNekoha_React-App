import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import PostComplain from './components/organisms/PostComplain';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const clear=()=>{
  localStorage.clear();
}

const App = () => {
  // const [text, setText] = useState('');
  const [localStorageContents, setLocalStorageContents] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('contents')) {
      const getLocalStorageContents = localStorage.getItem('contents');
      setLocalStorageContents(JSON.parse(getLocalStorageContents));
    }
  }, []);

  return (
    <div className="App mx-6 ">
      <section className="section">
      </section>
    <section className="container picture">
      <PostComplain/>

      <section className="fixed section">
        <div className="columns is-flex is-flex-direction-column is-justify-content-center ">
          <button className="is-danger is-outlined column is-medium button">
            <Link to="/explosion">爆破</Link>
          </button>
          <button onClick={clear} className="mt-2 clear button column is-medium is-primary is-outlined">RESET</button>
        </div>
    </section>
    </section>
      <section className="section">
      <div className="footer is-flex is-justify-content-center">
  <p className="is-size-7 has-text-weight-light">© 2021 あなたの心に、チャッカマン。All Rights Reserved.</p>
</div>
</section>
    </div>
  );
};

export default App;
