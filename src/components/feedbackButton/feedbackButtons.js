
const Buttons = ({ onGood, onNeutral, onBad }) => (
    <div>
        <button type="button" onClick={onGood}>Good</button>
        <button type="button" onClick={onNeutral}>Neutral</button>
        <button type="button" onClick={onBad}>bad</button>
    </div>
);

export default Buttons;