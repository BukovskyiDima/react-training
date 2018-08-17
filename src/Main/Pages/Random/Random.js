import * as React from 'react';
import api from '../../../serves/api';
import { GifsHolder } from '../../../Components/index'

export default class Random extends React.Component {

	state = {
		items: []
	};

	render() {
		let {items} = this.state;

		return (
			<main>
				<div className="container">
					<GifsHolder items={items}/>
				</div>
			</main>
		)
	}
}

