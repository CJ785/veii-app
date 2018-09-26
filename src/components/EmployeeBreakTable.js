import React, { Component } from 'react';

class EmployeeBreakTable extends Component {
    constructor(props) {
        super(props);
        this.createTable = this.createTable.bind(this)
    }
    createTable = () => {
        //array to hold all the table data
        let table = [];

        //array to hold all the break start times
        let startingtime = [];

        //array to hold all the break ending times
        let endingtime = [];

        //array to hold the break start times converted to numbers
        let startingNum = [];

        //array to hold break end times converted to numbers
        let endingNum = [];

        //loop through all break start times and pushing times to startingtime array
        this.props.state.startbreak.map((employee) => {
            startingtime.push(employee.breakstart)
        })

        //loop through all break ending times and pushing times to endingtime array
        this.props.state.endbreak.map((employee) => {
            endingtime.push(employee.breakend)
        })

        //loop through each date in the startingtime array, conver it to a number, and add it to the startingnum array
        startingNum = startingtime.map(date => new Date(date).getTime())

        ////loop through each date in the endingtime array, conver it to a number, and add it to the endingnum array
        endingNum = endingtime.map(date => new Date(date).getTime())

        //for loop that adds a new row with each starting time, ending time, and the difference between the two into the table
        for (let i = 0; i < startingtime.length; i++) {
            let breaktime = Math.floor(((endingNum[i] - startingNum[i]) / 1000) / 60)
            if (isNaN(breaktime)) {
                breaktime = "Currently on break"
            }
            else {
                breaktime += " minutes"
            }
            table.push(<tr key={[i]}><td>{startingtime[i]}</td><td>{endingtime[i]}</td><td>{breaktime} </td></tr>)

        }

        //reverse the table array so that the most recent break is shown first
        table.reverse();
        return table
    }


    render() {

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Break Start Time</th>
                            <th>Break End Time</th>
                            <th>Total Break Time</th>
                        </tr>

                        {this.createTable()}


                    </tbody>

                </table>

            </div>

        )
    }
}

export default EmployeeBreakTable;