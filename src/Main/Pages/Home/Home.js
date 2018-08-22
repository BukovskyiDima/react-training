import * as React from 'react';
import PropTypes from 'prop-types';
import { GifsHolder } from '../../../Components/index';
import { connect } from "react-redux";
import { getGif, getGifByQuery, handleSearchRequestQuery } from "./services";
import './Home.scss';

export class Home extends React.Component {

	componentDidMount() {
		const value = this.props.query;

		value === ''
			? this.props.gifRequest()
			: this.props.gifSearchRequest()
	};

	handleValueChange = (e) => {
		this.props.handleSearchRequestQuery(e.target.value);
	};

	formSubmit = (e) => {
		e.preventDefault();

		const value = this.props.query;
		value !== ''
			? this.props.gifSearchRequest()
			: this.props.gifRequest()
	};

	render() {
		const {items, query, error} = this.props;

		return (

			<main>
				<div
					className="container"
				>
					<form
						onSubmit={this.formSubmit}
						className="form-holder"
					>
						<div className="input-holder">
							<input
								className='input'
								type="text"
								placeholder="Type here... "
								value={query}
								onChange={this.handleValueChange}
							/>
						</div>
						<button
							className="btn"
						>
							Go
						</button>
					</form>
				</div>
				<div
					className="container"
				>
					<GifsHolder items={items}/>
					{error !== '' ? <span className="error">{error}</span> : null}
				</div>
			</main>
		)
	}
}

Home.propTypes = {
	items: PropTypes.array,
	query: PropTypes.string,
	isFetching: PropTypes.bool,
	error: PropTypes.string
};

const mapStateToProps = ({home: {items, query, isFetching, error}}) => ({
	items: items,
	query: query,
	isFetching: isFetching,
	error: error
});

export default connect(
	mapStateToProps,
	{
		gifRequest: getGif,
		gifSearchRequest: getGifByQuery,
		handleSearchRequestQuery
	}
)(Home);