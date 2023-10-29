import {useNavigate} from 'react-router-dom';

const Welcome = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="grid gap-4">
                <h3 className="text-center mx-auto">Welcome to the ultimate Linux quiz!</h3>
                <button className="w-max mx-auto" onClick={() => {
                    navigate('/quiz');
                }} >Click to Begin</button>
            </div>
        </>
    )
}

export default Welcome;