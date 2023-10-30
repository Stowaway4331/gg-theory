import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {apiUrl} from '../Constants';

const Welcome = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getQuestions = async () => {
        const res = await fetch(apiUrl);
        const newdata = await res.json();

        setData(newdata);
        // console.log(newdata);
    }

    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <>
            <div className="grid gap-4">
                <h3 className="text-center mx-auto">Welcome to the ultimate Linux quiz!</h3>
                {
                    data.length === 10 ? <button className="w-max mx-auto" onClick={() => {
                        navigate('/quiz', { state: { data: data } });
                    }} >Click to Begin</button> : <p className='w-max mx-auto'>Loading...</p>
                }
            </div>
        </>
    )
}

export default Welcome;