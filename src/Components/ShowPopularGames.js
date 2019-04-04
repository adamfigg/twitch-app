import React, { Component } from 'react';
import axios from 'axios';

class ShowPopularGames extends Component {
	constructor() {
		const axios = require('axios')

		const getBreeds = async () => {
			try {
				return await axios.get('https://dog.ceo/api/breeds/list/all')
			} catch (error) {
				console.error(error)
			}
		}

		const countBreeds = async () => {
			const breeds = await getBreeds()

			if (breeds.data.message) {
				console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
			}
		}

		countBreeds()
		super();
		this.getPopularGames = this.getPopularGames.bind(this);
	};

	getPopularGames() {
		console.log('get popular games called');
	};







	render() {
		return (
			<div>
				<button
					onClick={this.getPopularGames}
				>
					What's popular right now?
				</button>
			</div>
		);
	}
}

export default ShowPopularGames;