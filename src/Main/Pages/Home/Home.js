import * as React from 'react';
import { GifsHolder } from '../../../Components/index';
import { connect } from "react-redux";
import { getGifs } from "./action";


class Home extends React.Component {
	componentDidMount() {
		getGifs(this.props.dispatch);
	}

	render() {
		return (
			<main>
				<div className="container">
					<form action="#" className="form-holder">
						<div className="input-holder">
							<input type="text"/>
						</div>
						<button
							type="button"
							className="btn"
							onClick={()=> getGifs(this.props.dispatch)}
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
	gifs: state.gifs
}))(Home);