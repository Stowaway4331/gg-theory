import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {apiUrl} from '../Constants';

// const apiKey = import.meta.env.VITE_QUIZ_API_KEY;
// const limit = 10;
// const category = 'Linux';
// const difficulty = 'easy';

// const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${limit}&category=${category}&difficulty=${difficulty}`;

const Welcome = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getQuestions = async () => {
        const res = await fetch(apiUrl);
        const newdata = await res.json();

        setData(newdata);
        // console.log(newdata);
    }

    // const getData = new Promise(getQuestions)

    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <>
            <div className="grid gap-4">
                <h3 className="text-center mx-auto">Welcome to the ultimate Linux quiz!</h3>
                {
                    data.length === 10 ? <button className="w-max mx-auto" onClick={() => {
                        // setTriggerQuestions(!triggerQuestions);
                        navigate('/quiz', { state: { data: data } });
                    }} >Click to Begin</button> : <p>Loading...</p>
                }
            </div>
        </>
    )
}

export default Welcome;