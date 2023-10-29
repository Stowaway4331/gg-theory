import { useEffect, useState } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";


const apiKey = import.meta.env.VITE_QUIZ_API_KEY;
const limit = 10;
const category = 'Linux';
const difficulty = 'easy';

const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${limit}&category=${category}&difficulty=${difficulty}`;

const answered = Array.from({ length: limit }, () => ({
    selected: -1,
    disabled: false,
    correct: false,
}));

const Quiz = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [quizIndex, setQuizIndex] = useState(0);

    const getQuestions = async () => {
        const res = await fetch(apiUrl);
        const newdata = await res.json();

        setData(newdata);
        // console.log(newdata);
    }

    useEffect(() => {
        getQuestions();
    }, [])

    useEffect(() => {
        const newQuestions = [];
        const newOptions = [];
        const newAnswers = [];
        data.forEach((item) => {
            // console.log(value);
            if (item?.question !== null) {
                newQuestions.push(item?.question);
            }
            if (item?.answers !== null) {
                newOptions.push(item?.answers);
            }
            if (item?.correct_answers !== null) {
                newAnswers.push(item?.correct_answers);
            }

            setQuestions(newQuestions);
            setOptions(newOptions);
            setAnswers(newAnswers);
        })
    }, [data])

    return (
        <>
            {
                data.length === 10 ? <div className="max-w-[760px] w-3/4 sm:w-[600px] rounded-md overflow-hidden bg-[#00f4] mx-auto">
                    <h3 className="text-3xl bg-blue-500 py-4 px-2">Question Number: {quizIndex + 1}</h3>
                    <div key={quizIndex} className="mt-8 mb-4 mx-4">
                        <Question question={questions[quizIndex]} options={options[quizIndex]} answers={answers[quizIndex]} answered={answered} quizIndex={quizIndex} />
                    </div>
                    <div className="p-4 flex">
                        <div className="ml-auto flex gap-4">
                            <button disabled={quizIndex === 0} className={`${quizIndex === 0 ? 'text-gray-500' : ''} select-none`} onClick={() => {
                                setQuizIndex(quizIndex => quizIndex - 1)
                            }} >Prev</button>
                            <button onClick={() => {
                                if (quizIndex === limit - 1) {
                                    navigate('/results', { state: { answered: answered } });
                                }
                                else setQuizIndex(quizIndex => quizIndex + 1);
                            }} className={`${quizIndex === limit - 1 ? 'bg-green-600' : ''} select-none`} > {quizIndex === limit - 1 ? 'See Results' : 'Next'} </button>
                        </div>
                    </div>
                </div> : 'Loading...'
            }
        </>
    )
}

export default Quiz;