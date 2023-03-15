import {useState} from "react";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";


//this counter component is parent of CounterButton
function Counter() {
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementCounterParentFunction(by) {
        if (count - by >= 0) {
            setCount(count - by)
        }
    }

    function resetCount() {
        setCount(0)
    }

    return (
        <>
            <span className={"totalCount"}>{count}</span>
            {/*passing increment and decrement methods as props from parent component to child component*/}
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction}
                           decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction}
                           decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction}
                           decrementMethod={decrementCounterParentFunction}/>
            <ResetButton  reset={resetCount}/>
            {/*<CounterButton /> testing default values*/}
        </>
    )
}

export default Counter