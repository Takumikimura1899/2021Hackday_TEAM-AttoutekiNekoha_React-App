import 'bulma/css/bulma.min.css';
import { useState, useRef } from 'react';
import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-canvas';

import './App.css';

function App() {
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url
  const sigCanvas = useRef({});
  /* a function
        that uses the canvas ref to clear the canvas via a method given by
        react-signature-canvas */
  const clear = () => sigCanvas.current.clear();
  /* a function that uses the canvas ref to trim the canvas from white
        spaces via a method given by react-signature-canvas then saves it in our
        state */
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
  return (
    <div className='App'>
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Hello World</h1>
          <p className='subtitle'>
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
      <div>
        <button className='button is-primary is-medium'>button</button>
        <button className='button is-success is-large' type='submit'>
          button
        </button>
        <button className='button is-warning is-small' type='reset'>
          button
        </button>
      </div>
      <div className='container'>
        <h1>Signature Pad Example</h1>
        <Popup
          modal
          trigger={<button>Open Signature Pad</button>}
          closeOnDocumentClick={false}
        >
          {(close) => (
            <>
              <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                  className: 'signature',
                }}
              />
              {/* Button to trigger save canvas image */}
              <button onClick={save}>Save</button>
              <button onClick={clear}>Clear</button>
              <button onClick={close}>Close</button>
            </>
          )}
        </Popup>
        <br />
        <br />
        {/* if our we have a non-null image url we should
      show an image and pass our imageURL state to it*/}
      </div>
      {imageURL ? (
        <img
          src={imageURL}
          alt='my signature'
          style={{
            display: 'block',
            margin: '0 auto',
            border: '1px solid black',
            width: '150px',
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
