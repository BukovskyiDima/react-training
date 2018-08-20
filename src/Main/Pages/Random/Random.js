import * as React from 'react';
import { GifsHolder } from '../../../Components/index'
import connect from "react-redux/es/connect/connect";
import { getRandom } from "./action";

class Random extends React.Component {

	componentDidMount() {
		console.log("random")
		console.log(this.props)
        getRandom(this.props.dispatch);
	};

	render() {
		return (
			<main>
				<div className="container">
					{/*<GifsHolder items={this.props.gifs}/>*/}
				</div>
                <p>you see this page </p>
			</main>
		)
	}
}

export default connect((state) => ({
    random: state.random
}))(Random);