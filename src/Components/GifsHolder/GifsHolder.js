import * as React from "react";
import GifItem from '../GifItem/GifItem';


export default class GifsHolder extends React.Component {
	render(){
		return (
			<div className="item-holder">
				{this.props.items.map(item => (
					<GifItem key={item.id} item={item}/>
				))}
			</div>
		)
	}
}