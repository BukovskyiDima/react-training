import * as React from 'react';
import { GifsHolder } from '../../../Components/index';
import { connect } from "react-redux";
import { getGifs, getSearchGifs } from "./action";


class Home extends React.Component {

	componentDidMount() {
		getGifs(this.props.dispatch);
	};

	getNewValue = (e) => {
		console.log(e.target.value);
		getSearchGifs(this.props.dispatch, e.target.value)
	}

	render() {
		return (
			<main>
				<div className="container">
					<form action="#" className="form-holder">
						<div className="input-holder">
							<input type="text" onChange={this.getNewValue}/>
						</div>
						<button
							type="button"
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