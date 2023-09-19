import { nanoid } from 'nanoid'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    const options = [
        { value: good, title: 'Good: ' },
        { value: neutral, title: 'Neutral: ' },
        { value: bad, title: 'Bad: ' },
        { value: total, title: 'Total: '},
        { value: [positivePercentage, ' %'], title: 'Positive feedback: ' }]

    return (
        <> 
            <ul>
                {options.map(({value, title}) => {
                    return (
                        <li key={nanoid()}>
                            <p >{title}: <span>{value}</span></p>
                        </li>
                            )})
                    } 
            </ul>              
        </> 
    )
}