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
                    {/*<GifsHolder items={items}/>*/}
                    {/*{error !== '' ? <span className="error">{error}</span> : null}*/}
                </div>
            </main>
        )
    }
}

const mapStateToProps = ({auth: {user, error}}) => ({
    error: error,
    user: user
});

export default connect(
    mapStateToProps,
)(Favorite);