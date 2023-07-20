
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
            <div>
        <button type="button" onClick={onLeaveFeedback(options.good)}>Good</button>
                <button type="button" onClick={onLeaveFeedback(options.neutral)}>Neutral</button>
                <button type="button" onClick={onLeaveFeedback(options.bad)}>bad</button>
            </div>
);

export default FeedbackOptions;