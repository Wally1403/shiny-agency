//import { Outlet, Link } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()

    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            {/* Utilisation de Outlet :
            <Link to="client">Questionnaire Client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <Outlet />
            */}
            <Link to={previousNumber(parseInt(questionNumber))}>
                Question précedente
            </Link>
            <Link to={followingNumber(parseInt(questionNumber))}>
                Question suivante
            </Link>
        </div>
    )
}

function previousNumber(number) {
    return number === 1 ? '/survey/1' : `/survey/${number - 1}`
}
function followingNumber(number) {
    return number === 10 ? '/results' : `/survey/${number + 1}`
}

export default Survey
