import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const Results = () => {

    const {state} = useLocation();
    const {answered} = state;

    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [attempted, setAttempted] = useState(0);

    useEffect(() => {
        answered.forEach((obj) => {
            if(obj.correct) setCorrect(correct => correct + 1);
            else setIncorrect(incorrect => incorrect + 1);
            if(obj.selected !== -1) setAttempted(attempted => attempted + 1);
        })
    }, [answered])

    return (
        <div>
            <h1 className="mb-4">Results: </h1>
            <h3 className="flex text-green-500">Correct: <span className="ml-auto">{correct}</span></h3>
            <h3 className="flex text-red-500">Incorrect: <span className="ml-auto">{incorrect}</span></h3>
            <h3 className="flex text-blue-500">Attempted: <span className="ml-auto">{attempted}</span></h3>
        </div>
    )
}

export default Results;