import { useState, useEffect } from 'react';
import GifPlayer from 'react-gif-player';
import recipeGif from '../static/recipeApp.gif';
import { Link } from 'react-router-dom';
import './explosion.css';
import LinkToTopButton from '../components/molecules/LinkToTopButton';

export const ExplosionPage = () => {
  // const [localStorageContents, setLocalStorageContents] = useState(
  //   JSON.parse(localStorage.getItem('contents')),
  // );

  // useEffect(() => {
  //   if (localStorage.getItem('contents')) {
  //     const getLocalStorageContents = localStorage.getItem('contents');
  //     setLocalStorageContents(JSON.parse(getLocalStorageContents));
  //   }
  // }, []);

  // console.log(localStorageContents);
  // const text =
  //   localStorageContents[Math.floor(Math.random() * localStorageContents.length)];

  const newArray = [];
  const getLocalStorageContents = JSON.parse(localStorage.getItem('contents'));

  const length = Object.keys(getLocalStorageContents);

  for (let i = length.length - 1; i >= 0; i--) {
    newArray.push(i);
  }

  const arrayLength = newArray.length;

  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }
  const shuffleArray = [];

  newArray.forEach((element) => {
    shuffleArray.push(getLocalStorageContents[element]);
  });
  return (
    <>
      <div className="main">
        {/* <div className="explosion">
          <GifPlayer gif={recipeGif} autoplay />
          <p className="text1">{localStorageContents[0].value}</p>
          <p className="text2">{localStorageContents[1].value}</p>
          <p className="text3">{localStorageContents[2].value}</p>
          <p className="text4">{localStorageContents[3].value}</p>
        </div>
        <div className="has-text-centered">
          <LinkToTopButton />
        </div> */}
        <div className="explosion">
          <GifPlayer gif={recipeGif} autoplay />
          {shuffleArray.map((todo, index) => {
            return (
              <p key={todo.id} className={index}>
                {todo.value}
              </p>
            );
          })}
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
