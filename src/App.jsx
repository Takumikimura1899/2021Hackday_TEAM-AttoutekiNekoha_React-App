import 'bulma/css/bulma.min.css';
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <section className="section">
        <section className="container">
          <h1 className="title">ペーパーレス爆破</h1>
          <p className="subtitle">
            <strong>CO2</strong>も出しません。
          </p>
        </section>
      </section>
      <section className="field columns is-grouped is-grouped-centerd">
        <p className="form-label">不満</p>
        <input className="column"/>
        <button type="button" className="button is-primary is-medium">
          投稿
        </button>
      </section>
      <section className="posts">
      <div className="text is-grouped is-centerd">
        <p>sample</p>
        <p>sample</p>
      </div>
      </section>
      <section className="bomb is-grouped is-grouped-centerd">
      <button className="button is-danger">
        爆破
      </button>
      </section>
    </div>
  );
  }
export default App;
