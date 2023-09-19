import css from '../App.module.css'
export const Notification = ({ message }) => {
    return (<>
        <p className={css.nofeedback}>{ message}</p>
    </>)
}
