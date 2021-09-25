import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import { ExplosionPage } from '../exposionPage/explosionPage';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/explosion" component={ExplosionPage} />
      </Switch>
    </Router>
  );
}

export default Routing;
