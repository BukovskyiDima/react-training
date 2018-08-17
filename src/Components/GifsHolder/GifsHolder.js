import * as React from "react";

export default class GifsHolder extends React.Component {
	constructor(props) {
		super(props)
	};

	render(){
		return (
			<div className="item-holder">
				{this.props.items.map(item => (
					<div className="item" key={item.id}>
						{/*<img src={item.images.preview.url} alt='description'/>*/}
						<video controls="controls" width={300}>
							<source src={item.images.original.mp4} type="video/mp4" />
						</video>
						<span>{item.title}</span>
					</div>
				))}
			</div>
		)
	}
}