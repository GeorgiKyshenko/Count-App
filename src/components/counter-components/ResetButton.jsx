function ResetButton({reset}) {

    // function resetState() {
    //     reset()
    // }

    return (
        <>
            {/*we can call parent method directly with arrow function and the expected parameter.
            if there is expected parameter in the parent method we have to use arrow function */}
            <button className={"resetButton"} onClick={reset}>Reset</button>
        </>
    )

}

export default ResetButton