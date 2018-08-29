import * as React from "react";
import GifsHolder from "../../../Components/GifsHolder/GifsHolder";
import connect from "react-redux/es/connect/connect";

export class Favorite extends React.Component {

    render() {
        return (
            <main>
                <div
                    className="container"
                >
                    <GifsHolder items={this.props.favorite}/>
                    {/*{error !== '' ? <span className="error">{error}</span> : null}*/}
                </div>
            </main>
        )
    }
}

const mapStateToProps = ({favorite}) => ({
    favorite: Object.values(favorite),
});

export default connect(
    mapStateToProps,
)(Favorite);