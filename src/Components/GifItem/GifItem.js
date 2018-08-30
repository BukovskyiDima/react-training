import * as React from 'react';
import PropTypes from 'prop-types';
import './GifItem.scss';
import connect from "react-redux/es/connect/connect";
import { logout } from "../../Main/Pages/Auth/services";
import { addToFavorite, removeFromFavorite } from "../../Main/Pages/Favorite/services/action";

export class GifItem extends React.Component {

    addToFavorite = () => {
        this.props.addToFavorite(this.props.item);
    };

    removeFromFavorite = () => {
        this.props.removeFromFavorite(this.props.item.id);
    };

    render() {
        const {item} = this.props;
        if (!item) {
            return null;
        }
        return (
            <div className="item">
                <video controls="controls" loop="loop">
                    <source src={item.images.original.mp4} type="video/mp4"/>
                </video>
                <div className="button-holder">
                    <span>{item.title.slice(0, item.title.indexOf("GIF")).trim()}</span>
                    {this.props.loggedIn &&
                        (!this.props.isFavorite
                            ? <label className="checkbox-holder">
                                <input type="checkbox" onChange={this.addToFavorite}/>
                                <span className="checkmark"> </span>
                            </label>
                            : <label className="checkbox-holder">
                                <input type="checkbox" checked onChange={this.removeFromFavorite}/>
                                <span className="checkmark"> </span>
                            </label>
                        )
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
        isFavorite: !!state.favorite[ownProps.item.id]
    }),
    {
        logout,
        removeFromFavorite,
        addToFavorite
    }
)(GifItem);