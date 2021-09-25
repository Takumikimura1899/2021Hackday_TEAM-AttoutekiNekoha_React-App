import GifPlayer from 'react-gif-player';
import recipeGif from '../static/recipeApp.gif';
import { Link } from 'react-router-dom';
import './explosion.css';

export const explosionPage = () => {
  return (
    <>
      <div className="explosion">
        <GifPlayer gif={recipeGif} autoplay />
        <p>ふざけんなこの野郎</p>
      </div>
      <div className="has-text-centered">
        <button className="button is-warning">
          <Link to="/">TopPageに戻る</Link>
        </button>
      </div>
    </>
  );
};
