import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import LandingPage from './Pages/LandingPage';
import Header from './Components/Header'


function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={LandingPage}/>
      <Redirect from='*' to='/'/>
    </Router>
  );
}

export default App;
