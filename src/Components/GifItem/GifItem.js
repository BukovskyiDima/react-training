import * as React from 'react';
import PropTypes from 'prop-types';
import './GifItem.scss';
import connect from "react-redux/es/connect/connect";
import { addToFavorite, removeFromFavorite } from "../../Main/Pages/Favorite/services/action";

export class GifItem extends React.Component {

    toggleFavorite = (e) => {
        const { item, addToFavorite, removeFromFavorite } = this.props;
        const value = e.target.checked;

        value
            ? addToFavorite(item)
            : removeFromFavorite(item.id);
    };

    render() {
        const {item} = this.props;
        if (!item) {
            return null;
        }
        return (
            <div className="item">
                <video controls loop="loop">
                    <source src={item.images.original.mp4} type="video/mp4"/>
                </video>
                <div className="button-holder">
                    <span>{item.title.slice(0, item.title.indexOf("GIF")).trim()}</span>
                    {this.props.loggedIn &&
                        <label className="checkbox-holder">
                            <input type="checkbox" checked={this.props.isFavorite} onChange={this.toggleFavorite}/>
                            <span className="checkmark"> </span>
                        </label>
                    }
                </div>
            </div>
        )
    }
}

GifItem.propTypes = {
    item: PropTypes.object
};

export default connect(
    (state, ownProps) => ({
        loggedIn: state.auth.loggedIn,
        isFavorite: !!state.favorite.items[ownProps.item.id]
    }),
    {
        removeFromFavorite,
        addToFavorite
    }
)(GifItem);