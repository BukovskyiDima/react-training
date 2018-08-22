import * as React from 'react';
import { GifsHolder } from '../../../Components/index';
import { connect } from "react-redux";
import {
	getGif,
	getGifByQuery,
	handleSearchRequestQuery
} from "./services";

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
								value={this.props.query}
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
                    {!this.props.isFetching ? <GifsHolder items={this.props.items} /> : null}
					{this.props.error ? <span className="loading">{this.props.error}</span> : null}
				</div>
			</main>
		)
	}
}

const mapStateToProps = (state) => ({
	items: state.home.items,
	query: state.home.query,
    isFetching: state.home.isFetching,
	error: state.home.error
});

export default connect(
	mapStateToProps,
	{
		gifRequest: getGif,
		gifSearchRequest: getGifByQuery,
		handleSearchRequestQuery
	}
)(Home);