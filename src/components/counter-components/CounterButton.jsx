import "./Package.css"
import PropTypes from 'prop-types';

function CounterButton({by, incrementMethod, decrementMethod}) {
    //count for default value. useState returns [value,f] value and a function to update the state(value)
    //count is mapped to the current value of the useState which in this case is 0
    //this representation of array is called deconstruction !
    // const [count, setCount] = useState(0);

    // function incrementCounterFunction() {
    //     incrementMethod(by)
    //     // setCount(count + by)
    // }

    function decrementCounterFunction() {
        decrementMethod(by)
        // if (count >= 0) {
        //     setCount(count - by)
        // }
    }

    return (
        <div className={"CounterButton"}>
            <div>
                {/*<span className={"totalCount"}>{count}</span> this is moved to parent component to display only one count number*/}
                {/*we can call parent method directly with arrow function and the expected parameter*/}
                <button className={"counterButton"} onClick={() => incrementMethod(by)}>+{by}</button>
                <button className={"counterButton"} onClick={decrementCounterFunction}>-{by}</button>
            </div>
        </div>
    )
}

//this sets the properties type of the CounterButton component which are passed in the App.js -> <CounterButton by={1}/> to be only numbers
CounterButton.propTypes = {
    by: PropTypes.number
}

//setting default value for CounterButton if not set explicitly
CounterButton.defaultProps = {
    by: 1
}

export default CounterButton