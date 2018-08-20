import * as React from 'react';
import { GifsHolder } from '../../../Components/index'
import connect from "react-redux/es/connect/connect";
import { getRandom } from "./action";

class Random extends React.Component {

	componentDidMount() {
        getRandom(this.props.dispatch);
	};

	render() {
		return (
			<main>
				<div className="container">
					<GifsHolder items={this.props.gifs}/>
				</div>
			</main>
		)
	}
}

export default connect((state) => ({
    gifs: state.gifs
}))(Random);