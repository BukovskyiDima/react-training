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
						<img src={item.images.original.url} alt='description'/>
						<span>{item.title}</span>
					</div>
				))}
			</div>
		)
	}
}