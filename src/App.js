import React, { Component } from 'react';
import Axios from 'axios';
import Modal from './Modal';

import './App.css';

class App extends Component {
	state = {
		showModal: false,
		photos: []
	};

	componentDidMount() {
		Axios.get('https://jsonplaceholder.typicode.com/photos')
			.then(response => {
				console.log(response);
				const photos = response.data.slice(0, 25);
				this.setState({ photos });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal
		});
		console.log(this.state);
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="row">
						<h1>Image Gallery</h1>
					</div>
					<div className="row">
						{this.state.photos.map(photo =>
							<div className="col-custom-5">
								<div className="card">
									<img
										className="card-img-top"
										onClick={this.toggleModal.bind(this)}
										src={photo.thumbnailUrl}
										alt={photo.title}
									/>
								</div>
								{this.state.showModal
									? <Modal
											closeModal={this.toggleModal.bind(this)}
											url={photo.url}
											title={photo.title}
											description={photo.description}
										/>
									: null}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
