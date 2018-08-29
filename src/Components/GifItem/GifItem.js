import * as React from 'react';
import PropTypes from 'prop-types';
import './GifItem.scss';
import connect from "react-redux/es/connect/connect";
import {logout} from "../../Main/Pages/Auth/services";

export class GifItem extends React.Component {
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
                    {this.props.loggedIn
                        ? <a className="btn">add</a>
                        : <a className="btn">remove</a>
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
    (state) => ({
        loggedIn: state.auth.loggedIn
    }),
    {
        logout
    }
)(GifItem);