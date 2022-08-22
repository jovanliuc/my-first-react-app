import React, {Component} from "react";

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.changeFirstValue = this.changeFirstValue.bind(this);
        this.changeSecondValue = this.changeSecondValue.bind(this);
        this.add = this.add.bind(this);
    }

    changeFirstValue(e) {
        const firstValue = e.target.value;
        this.props.changeFirstValue(firstValue);
    }

    changeSecondValue(e) {
        const secondValue = e.target.value;
        this.props.changeSecondValue(secondValue);
    }

    add() {
        const { calculator, add } = this.props;
        const { firstValue, secondValue } = calculator;
        console.log(firstValue);
        console.log(secondValue);
        add({ firstValue, secondValue });
    }

    render() {
        const { firstValue, secondValue, result } = this.props.calculator;
        return (
            <div>
                <br />
                First Value:<input value={firstValue} onChange={e => this.changeFirstValue(e)}/>
                <br />
                Second Value:<input value={secondValue} onChange={e => this.changeSecondValue(e)}/>
                <br />
                <button onClick={this.add}>ADD</button>
                <br />
                Result: {result}
            </div>
        );
    }
}

export default Calculator;