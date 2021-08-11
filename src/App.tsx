import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import LandingPage from './Pages/LandingPage';
import Header from './Components/Header';
import Gamepage from './Pages/GamePage'


function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route path='/games/:game_id' component={Gamepage} />
      <Redirect from='*' to='/' />
    </Router>
  );
}

export default App;
