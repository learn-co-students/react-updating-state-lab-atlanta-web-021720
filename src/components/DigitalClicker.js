// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    handleClickEvent = () => {
        this.setState((prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        }))
    } 

    render() {
        return (
        <button
        onClick={this.handleClickEvent}
        >{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker
