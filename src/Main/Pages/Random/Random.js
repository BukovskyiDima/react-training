import * as React from 'react';
import { GifsHolder } from '../../../Components/index'
import connect from "react-redux/es/connect/connect";
import { action } from "./services";

class Random extends React.Component {

	componentDidMount() {
		action(this.props.dispatch);
	};

	render() {
		return (
			<main>
				<div className="container">
					<button
						className="btn next"
						onClick={() => action(this.props.dispatch)}
					>
						Next
					</button>
					<GifsHolder items={this.props.gifs}/>
				</div>
			</main>
		)
	}
}

export default connect((state) => ({
	gifs: state.random.gifs
}))(Random);