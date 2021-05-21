import React, {Component} from 'react';

class Keypad extends Component {
    handleOnChange = (e) => {
        e.preventDefault()
        console.log("Entering Password...")
    }
    render() {
        return(
            <div>
                <input type="password" keyUp={this.handleOnChange} />
            </div>
        )
    }
}

export default Keypad