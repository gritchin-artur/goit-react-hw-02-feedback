import css from './feedbackStatistics.module.css'

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
     <ul className={css.listFeedback}>
        <li className={css.good}>Good: {good}</li>
        <li className={css.neutral}>Neutral: {neutral}</li>
        <li className={css.bad}>Bad: {bad}</li>
        <li className={css.total}>Total: {total}</li>
        <li className={css.positive}>Positive feedback: {positiveFeedback}%</li>
       </ul>
);

export default Statistics; 