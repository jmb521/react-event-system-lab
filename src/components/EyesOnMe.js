import React, {Component} from 'react';
import { RuntimeGlobals } from 'webpack';

class EyesOnMe extends Component {

    handleOnBlur = ()= > {
        
    }

    render() {
        return(
            <div>
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button>
            </div>
        )
    }
}
export default EyesOnMe