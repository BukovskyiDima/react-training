import * as React from "react";

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