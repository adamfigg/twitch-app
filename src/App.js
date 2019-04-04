import React, { Fragment, Component } from 'react';
import './App.css';

import ShowPopularGames from './Components/ShowPopularGames';

class App extends Component {
	render() {
		return (
			<Fragment>
				<header>
					<h1>Welcome to What's Streaming. See what's streaming on Twitch right now.</h1>
				</header>
				<ShowPopularGames />
			</Fragment>
		);
	}
}

export default App;
