import GifPlayer from 'react-dom';
import recipeGif from './static/recipeApp.gif';

function explosionPage() {
  return (
    <>
      <h1>爆発画面</h1>
      <GifPlayer gif={recipeGif} />
    </>
  );
}

export default explosionPage;
