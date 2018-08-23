import * as React from 'react';
import GifItem from '../GifItem/GifItem';
import PropTypes from 'prop-types';
import './GifsHolder.scss';

export default class GifsHolder extends React.Component {
	render() {
		return (
			<div className="item-holder">
				{this.props.items.map(item => (
					<GifItem key={item.id} item={item}/>
				))}
				<GifItem/>
			</div>
		)
	}
}

GifsHolder.propTypes = {
	items: PropTypes.array
};