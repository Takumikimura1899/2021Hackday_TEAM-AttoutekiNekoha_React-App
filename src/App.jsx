import 'bulma/css/bulma.min.css';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App=()=> {
  return (
    <div className="App mx-6">
      <section className="section">
        <div className="container m-auto mx-5">
          <h1 className="title ">あなたの気持ちに、<strong>チャッカマン。</strong></h1>
        </div>
      </section>
    <section>
      <i><FontAwesomeIcon icon="fa-solid fa-1"/>aaaaaa</i>
      <section className="section box has-background-grey-dark box-radius-3">

        <div className="field columns is-grouped is-grouped-centerd">
          <input placeholder="あなたの愚痴をお聞かせください"className="column ml-6 "/>
          <button type="submit" className="ml-3 mr-5 button is-success is-outlined is-outlined is-medium is-rounded">投稿</button>
        </div>
      </section>
    </section>
      <section className="section">
        <div className="posts">
          <div className="columns text is-grouped is-flex is-justify-content-center is-vcentered is-centered">
            <p className="box column is-5 ml-6 has-text-centerd mb-2 mr-1">sample</p> 
            <p className="box column is-5 mr-6 has-text-centerd mb-2 ml-1">sampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
          </div>
        </div>

      </section>

      <section className="section">
        <div className="bomb is-grouped is-grouped-centerd">
          <button className="bomb button is-danger is-clickable is-rounded">
            爆破
          </button>
        </div>

      </section>
    </div>
  );
  }
export default App;
