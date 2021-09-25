import GifPlayer from 'react-gif-player';
import recipeGif from '../static/recipeApp.gif';
import { Link } from 'react-router-dom';
import './explosion.css';

export const explosionPage = () => {
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
    </>
  );
};
