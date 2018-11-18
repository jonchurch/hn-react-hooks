import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header'
import ListView from './components/ListView'
import Item from './components/Item'
// import './App.css';

const NotFound = () => <h1>404</h1>

const ContentView = styled.div`
	max-width: 800px;
	margin: 0 auto;
	position: relative;
`
class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">
		<Header />
		<ContentView>
			<Switch>
			<Route exact path="/" component={ListView} />
			<Route path="/:filter(top|jobs|new|show|ask)/:page?" component={ListView} />
			<Route exact path="/item/:id" component={Item} />
			<Route component={NotFound} />
			</Switch>
		</ContentView>
			</div>
		</Router>
    );
  }
}


export default App;
