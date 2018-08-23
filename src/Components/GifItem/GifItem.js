import * as React from 'react';
import PropTypes from 'prop-types';
import './GifItem.scss';

export default class GifItem extends React.Component {
	render() {
		const { item } = this.props;
		if( !item ){
			return null;
		}
		return (
			<div className="item">
				<video controls="controls" loop="loop">
					<source src={item.images.original.mp4} type="video/mp4"/>
				</video>
				<span>{item.title}</span>
			</div>
		)
	}
}

GifItem.propTypes = {
	item: PropTypes.object
};