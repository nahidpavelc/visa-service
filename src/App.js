import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Coaching from './components/Coaching/Coaching';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import NotFound from './components/NotFound/NotFound';
import Country from './components/Country/Country';
import { useEffect, useState } from 'react';
import Signup from './components/Signup/Signup';
import Login from './components/logIn/Login';


function App() {


  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/coaching" component={Coaching} />
          <Route exact path="/service" component={Services} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
