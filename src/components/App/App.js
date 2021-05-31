import './App.css';
import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import Portfolio from '../Portfolio/Portfolio.js';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/About" render={() => <About />} />
          <Route exact path="/Portfolio" render={() => <Portfolio />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
