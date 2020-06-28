import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

//pages
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import NoMatchPage from './Pages/404';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />          
          <Route path="/about" component={AboutPage} />
          <Route path="/404" component={NoMatchPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
