import * as React from 'react';
import { GifsHolder } from '../../../Components/index'
import connect from "react-redux/es/connect/connect";
import { getRandomGif } from "./services";

class Random extends React.Component {

	componentDidMount() {
		this.props.getRandomGif();
	};

	render() {
		return (
			<main>
				<div className="container">
					<button
						className="btn next"
						onClick={() => this.props.getRandomGif()}
					>
						Next
					</button>
					<GifsHolder items={this.props.items}/>
				</div>
			</main>
		)
	}
}

const mapStateToProps = (state) => ({
	items: state.random.items
});

export default connect(mapStateToProps, { getRandomGif } )(Random);