// Code EyesOnMe Component Here

function EyesOnMe(){
    function eyeFocussed(){
        console.log("Good!")
    }
    function eyeNotFocussed(){
        console.log("Hey! Eyes on me!")
    }
    return(
        <div>
            <button onFocus={eyeFocussed} onBlur={eyeNotFocussed} >Eyes on me</button>
        </div>
    )
}

export default EyesOnMe