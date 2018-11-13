import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
// import './App.css';

const NotFound = () => <h1>404</h1>

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">
		<Header />
		<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/top" component={Home} />
		<Route exact path="/new" component={Home} />
		<Route exact path="/show" component={Home} />
		<Route exact path="/ask" component={Home} />
		<Route exact path="/jobs" component={Home} />
		<Route component={NotFound} />
		</Switch>
			</div>
		</Router>
    );
  }
}


export default App;
