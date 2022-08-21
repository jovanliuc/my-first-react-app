import React, {Component} from "react";
import { User, Calculator } from '../../containers';

class App extends Component {
    render() {
        const {app, incrementValue, decrementValue} = this.props;
        return (
            <div>
                <div>
                    <input value={app.value} />
                    <button onClick={incrementValue}>Increment</button>
                    <button onClick={decrementValue}>Decrement</button>
                </div>
                <User />
                <Calculator />
            </div>
        );
    }
}

export default App;
