import css from './feedbackNotification.module.css'
const Notification = ({ message }) => (
    <h2 className={css.feedback}>{message}</h2>
);

export default Notification;