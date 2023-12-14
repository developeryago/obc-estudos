import { useState } from 'react'

function getIntervalValue() {
    console.log("Obtendo valor incial")
    return 1 +1
}

export default function useCounter() {
    const [count, setCount] = useState(getIntervalValue)

    const increment = () => {
        setCount((currentState) => currentState + 2)
    }
    return {count, increment}
}

