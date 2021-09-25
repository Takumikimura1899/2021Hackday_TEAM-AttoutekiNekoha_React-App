import GifPlayer from 'react-gif-player';
import recipeGif from './static/recipeApp.gif';

export const explosionPage = () => {
  return (
    <>
      <GifPlayer gif={recipeGif} autoplay={true} />
      <div className="has-text-centered">
        <button className="button is-warning">TopPageに戻る</button>
      </div>
    </>
  );
};
