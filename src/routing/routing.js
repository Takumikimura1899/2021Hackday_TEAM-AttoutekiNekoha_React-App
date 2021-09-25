import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
// import explosionPage from '../explosionPage';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/explosion" componen={explosionPage} /> */}
      </Switch>
    </Router>
  );
}

export default Routing;
