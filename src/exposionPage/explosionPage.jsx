import GifPlayer from 'react-gif-player';
import recipeGif from '../static/recipeApp.gif';
import './explosion.css';
import LinkToTopButton from '../components/molecules/LinkToTopButton';

export const ExplosionPage = () => {
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
        <div className="explosion">
          <GifPlayer gif={recipeGif} autoplay />
          {shuffleArray.map((todo, index) => {
            return (
              <p key={todo.id} className={`text${index + 1}`}>
                {todo.value}
              </p>
            );
          })}
        </div>
        <div className="has-text-centered">
          <LinkToTopButton />
        </div>
      </div>
    </>
  );
};
