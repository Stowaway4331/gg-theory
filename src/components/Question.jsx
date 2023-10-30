import { useEffect, useState } from "react";

const Question = ({ question, options, answers, answered, quizIndex }) => {

    const [isDisabled, setIsDisabled] = useState(answered[quizIndex].disabled);

    // console.log(answered)

    // console.log(typeof answers === "object" ? typeof Object.entries(answers)[3][1] : '');

    useEffect(() => {
        // console.log(isDisabled);
        const showAnswers = () => {
            // console.log(selected);
            const optionButtons = document.querySelectorAll('.option_button');
            optionButtons.forEach((button, index) => {
                if (typeof answers === "object" && Object.entries(answers)[index][1] === "true") {
                    button.style.backgroundColor = "#0f09";
                    if (answered[quizIndex].selected === index) {
                        answered[quizIndex].correct = true;
                    }
                } else {
                    button.style.backgroundColor = "#f009";
                    if (answered[quizIndex].selected === index) {
                        button.style.backgroundColor = '#00f9'
                    }
                }
            })
        }

        if (answered[quizIndex].disabled === true) showAnswers();
    }, [isDisabled])

    return (
        <div className="[&>*]:transition-all">
            <p className="mb-8 text-xl">Q: {typeof question === "string" && question}</p>
            <div className="grid sm:grid-cols-2 gap-4">
                {
                    typeof options === "object" && Object.entries(options).map(([key, value], index) => {
                        return (
                            value ? <button
                                key={index}
                                disabled={isDisabled}
                                onClick={e => {
                                    answered[quizIndex].disabled = true;
                                    answered[quizIndex].selected = index;
                                    setIsDisabled(true)
                                }}
                                className="select-none option_button"
                            >
                                {" " + key.split('_')[1]}){" " + value}
                            </button> : ''
                        )
                    })
                }
            </div>
            {
                answered[quizIndex].disabled === true &&
                <p className="mt-4">Answer: {typeof answers === "object" && Object.entries(answers).map(([key, value], index) => { return value === "true" ? "("+key.split('_')[1]+")" : '' })}</p>
            }
            {answered[quizIndex].selected !== -1 && <p>You selected: ({String.fromCharCode(answered[quizIndex].selected + 97)})</p>}
            <div className="border-b mt-12"></div>
        </div>
    )
}

export default Question;