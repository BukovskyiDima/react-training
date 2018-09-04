import * as React from 'react';
import { GifsHolder } from '../../../Components/index'
import { connect } from "react-redux";
import { randomGifRequest } from "./services";
import PropTypes from 'prop-types';

export class Random extends React.Component {

    componentDidMount() {
        this.props.getRandomGif();
    };

    render() {
        const {items} = this.props;

        return (
            <main>
                <div
                    className="container"
                >
                    <button
                        className="btn next"
                        onClick={this.props.getRandomGif}
                    >
                        Next
                    </button>
                    <GifsHolder
                        items={items}
                    />
                </div>
            </main>
        )
    }
}

Random.protoType = {
    items: PropTypes.object,
    getRandomGif: PropTypes.func
};

const mapStateToProps = ({random: {items}}) => ({
    items: items
});

export default connect(
    mapStateToProps,
    {
        getRandomGif: randomGifRequest
    }
)(Random);