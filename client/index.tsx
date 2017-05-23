import * as React from "react";
import * as ReactDOM from "react-dom";

class ReChess extends React.Component<{}, {}> {
    render() {
        return (
            <span>
                Here we will render the chess board.
            </span>
        )
    }
}

ReactDOM.render(<ReChess/>, document.getElementById("content"));