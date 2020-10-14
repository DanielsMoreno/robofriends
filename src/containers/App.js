import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry.js'
// import { robots }  from '../components/robots.js';
import './App.css';
// const state = {
// 	robots: robots,
// 	searchfield: '',
// }

class App extends Component{

	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {return response.json();})
		.then(users => {this.setState({robots: users})});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		// const filteredRobots = this.state.robots.filter(robots => {
		// 	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })
		// console.log(filteredRobots);
	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		
		if(robots.length === 0)
		{
			return <h1 className='f1'>Loading...</h1>
		}
		else
		{
			return (
			<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
			);
		}
	}	
}

export default App;