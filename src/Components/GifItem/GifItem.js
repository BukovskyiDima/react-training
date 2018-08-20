import * as React from 'react';
import PropTypes from 'prop-types';

export default class GifItem extends React.Component {
	render(){
		return (
			<div className="item" key={this.props.item.id}>
				<video controls="controls" loop="loop">
					<source src={this.props.item.images.original.mp4} type="video/mp4" />
				</video>
				<span>{this.props.item.title}</span>
			</div>
		)
	}
}

GifItem.propTypes = {
	id: PropTypes.string,
	mp4: PropTypes.string,
	title: PropTypes.string
}