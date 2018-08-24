import * as React from 'react';
import GifItem from '../GifItem/GifItem';
import PropTypes from 'prop-types';
import './GifsHolder.scss';

export default class GifsHolder extends React.Component {
	render() {
        const { items } = this.props;

        return (
			<div className="item-holder">
				{items.map(item => (
					<GifItem key={item.id} item={item}/>
				))}
			</div>
		)
	}
}

GifsHolder.propTypes = {
	items: PropTypes.array
};