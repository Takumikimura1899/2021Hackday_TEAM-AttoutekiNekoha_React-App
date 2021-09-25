import 'bulma/css/bulma.min.css';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">ペーパーレス爆破</h1>
          <p className="subtitle">
            <strong>CO2</strong>も出しません。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="field columns is-grouped is-grouped-centerd">
          <p className="form-label">不満</p>
          <input className="column" />
          <button type="button" className="button is-primary is-medium">
            投稿
          </button>
        </div>
      </section>

      <section className="section">
        <div className="posts">
          <div className="text is-grouped is-centerd">
            <p>sample</p>
            <p>sample</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="bomb is-grouped is-grouped-centerd">
          <button className="button is-danger">
            <Link to="/explosion">爆破</Link>
          </button>
        </div>
      </section>
    </div>
  );
};
export default App;
