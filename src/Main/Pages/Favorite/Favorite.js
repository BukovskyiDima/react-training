import * as React from "react";
import GifsHolder from "../../../Components/GifsHolder/GifsHolder";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';

export class Favorite extends React.Component {

    render() {
        return (
            <div className="container favorite" >
                <GifsHolder items={this.props.favorite}/>
                {/*{error !== '' ? <span className="error">{error}</span> : null}*/}
            </div>
        )
    }
}

Favorite.protoType = {
    favorite: PropTypes.array
};

const mapStateToProps = ({favorite}) => ({
    favorite: Object.values(favorite.items),
});

export default connect(
    mapStateToProps,
)(Favorite);