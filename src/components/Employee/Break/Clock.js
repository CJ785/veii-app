import React from "react";
;


export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };

    }



    updateClock = (event) => {
        this.setState({
            time: new Date().toLocaleString()
        }, () => {

            this.props.onChange(this.state.time);

        });

    }
    render() {
        return (
            <div className="Time-Record">
                <p className="App-clock">
                    {this.state.time}.
       </p>
            </div>


        );
    }

}

export default Clock;