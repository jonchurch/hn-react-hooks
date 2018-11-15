import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Item from './components/Item.jsx'
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
			<Route exact path="/" component={Home} />
			<Route exact path="/top" component={Home} />
			<Route exact path="/new" component={Home} />
			<Route exact path="/show" component={Home} />
			<Route exact path="/ask" component={Home} />
			<Route exact path="/jobs" component={Home} />
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
