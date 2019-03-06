import React from 'react';

class Modal extends React.Component {
	toggleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
		console.log(this.state);
	}

	render() {
		return (
			<div className="modal" onClick={this.props.closeModal}>
				<div className="modal-inner">
					<img className="full-size" src={this.props.url} alt={this.props.title} />
					<h5 className="image-title">{this.props.title}</h5>
					<p className="card-text">{this.props.description}</p>
				</div>
			</div>
		);
	}
}
export default Modal;