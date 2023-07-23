import css from './feedbackButtons.module.css'
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
            <div className={css.listButtons}>
        <button className={css.buttons} type="button" onClick={onLeaveFeedback(options.good)}>Good</button>
                <button className={css.buttons} type="button" onClick={onLeaveFeedback(options.neutral)}>Neutral</button>
                <button className={css.buttons} type="button" onClick={onLeaveFeedback(options.bad)}>bad</button>
            </div>
);

export default FeedbackOptions;