import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header'
import Home from './components/Home'
import Item from './components/Item'
import Jobs from './components/Jobs'
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
			<Route path="/top/:page" component={Home} />
			<Route exact path="/new" component={Home} />
			<Route exact path="/show" component={Home} />
			<Route exact path="/ask" component={Home} />
		{/* 
			added Jobs component because using the same component for all routes never triggered an "unmount" 
			(well I think this is the issue)
			and so it was expecting 30 hooks, but the jobs listing only has like a dozen items,
			so it had fewer hooks than expected?
		*/}
			<Route exact path="/jobs" component={Jobs} />
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
