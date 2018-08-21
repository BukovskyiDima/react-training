import * as React from 'react';
import { GifsHolder } from '../../../Components/index';
import { connect } from "react-redux";
import { getGifs, getSearchGifs, handleSearchRequestQuery } from "./services";

export class Home extends React.Component {

	componentDidMount() {
		this.props.getGifs();
	};

	handleValueChange = (e) => {
		this.props.handleSearchRequestQuery(e.target.value)
		// getSearchGifs(this.props.dispatch, e.target.value)
	};

	formSubmit = (e) => {
		e.preventDefault();

		const value = this.props.value;
		value !== ''
			? this.props.getSearchGifs()
			: this.props.getGifs()
	};

	render() {

		return (
			<main>
				<div className="container">
					<form onSubmit={this.formSubmit} className="form-holder">
						<div className="input-holder">
							<input type="text" placeholder="Type here... " value={this.props.query}
							       onChange={this.handleValueChange}/>
						</div>
						<button
							className="btn"
						>
							Go
						</button>
					</form>
				</div>
				<div className="container">
					<GifsHolder items={this.props.items}/>
				</div>
			</main>
		)
	}
}

const mapStateToProps = (state) => ({
	items: state.home.items,
	query: state.home.query,
});

const mapDispatchToProps = (dispatch) => {
	return {
		getGifs: () => getGifs(dispatch),
		getSearchGifs: (query) => getSearchGifs(dispatch, query),
		handleSearchRequestQuery: (query) => dispatch(handleSearchRequestQuery(query))
	};
};

const mergeProps = (stateProps, dispatchProps) => {
	const getSearchGifs = () => dispatchProps.getSearchGifs(stateProps.query);
	return {
		...stateProps,
		...dispatchProps,
		getSearchGifs
	}
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);