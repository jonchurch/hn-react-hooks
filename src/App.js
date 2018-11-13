import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
// import './App.css';

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">
		<Header />
		<Route exact path="/" component={Home} />
			</div>
		</Router>
    );
  }
}

export default App;
