import css from '../App.module.css'
import { nanoid } from 'nanoid'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
            return (
                    <div className={css.btn_thumb} >
                    {options.map((option) => {
                             return (
                                 <button type="button" name={option} key={nanoid()}
                                     className={css.feedback_btn}
                                    onClick={onLeaveFeedback}>{option}</button>   
                             )
                        })}
                    </div>
            )  
}