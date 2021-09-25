import { useState, useEffect } from 'react';
import GifPlayer from 'react-gif-player';
import recipeGif from '../static/recipeApp.gif';
import { Link } from 'react-router-dom';
import './explosion.css';

export const ExplosionPage = () => {
  const [localStorageContents, setLocalStorageContents] = useState(
    JSON.parse(localStorage.getItem('contents')),
  );

  useEffect(() => {
    if (localStorage.getItem('contents')) {
      const getLocalStorageContents = localStorage.getItem('contents');
      setLocalStorageContents(JSON.parse(getLocalStorageContents));
    }
  }, []);

  console.log(localStorageContents);
  // const text =
  //   localStorageContents[Math.floor(Math.random() * localStorageContents.length)];

  return (
    <>
      <div className="main">
        <div className="explosion">
          <GifPlayer gif={recipeGif} autoplay />
          <p className="text1">{localStorageContents[0].value}</p>
          <p className="text2">{localStorageContents[1].value}</p>
          <p className="text3">{localStorageContents[2].value}</p>
          <p className="text4">{localStorageContents[3].value}</p>
        </div>
        <div className="has-text-centered">
          <button className="button is-warning">
            <Link to="/">TopPageに戻る</Link>
          </button>
        </div>
      </div>
    </>
  );
};
