import * as React from 'react';
import { GifsHolder } from '../../../Components/index';
import { connect } from "react-redux";
import { getGifs, getSearchGifs } from "./action";


class Home extends React.Component {

	state = {
		value: ''
	}

	componentDidMount() {
		console.log(this.props)
		getGifs(this.props.dispatch);
	};

	handleValueChange = (e) => {
		this.setState({
			value: e.target.value
		})
		// getSearchGifs(this.props.dispatch, e.target.value)
	}

	formSubmit = (e) => {
		e.preventDefault();

		getSearchGifs(this.props.dispatch, this.state.value)
	}

	render() {
		return (
			<main>
				<div className="container">
					<form onSubmit={this.formSubmit} className="form-holder">
						<div className="input-holder">
							<input type="text" placeholder="Type here... " value={this.state.value} onChange={this.handleValueChange}/>
						</div>
						<button
							className="btn"
						>
							Go
						</button>
					</form>
				</div>
				<div className="container">
					<GifsHolder items={this.props.gifs}/>
				</div>
			</main>
		)
	}
}

export default connect((state) => ({
	gifs: state.gifs,
	value: state.value
}))(Home);