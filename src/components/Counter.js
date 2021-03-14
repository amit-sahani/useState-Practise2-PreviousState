import React, {useState} from 'react'

const Counter = () => {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const incrementWithPrevState = () =>{
        for(let i =0; i<5; i++){
            setCount(count+1)
        }
    }
    const incrementWithoutPrevState = () =>{
        for(let i =0; i<5; i++){
            setCount(prevCount=>prevCount+1)
        }
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(initialState)} >Reset</button>
            <button onClick={incrementWithPrevState} >Increment 5 with prevState</button>
            <button onClick={incrementWithoutPrevState}>Increment 5 without prevState</button>
            <button onClick={()=>setCount(count-5)}>Decrement with 5</button>
        </div>
    )
}

export default Counter
