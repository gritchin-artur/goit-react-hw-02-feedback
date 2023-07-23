import css from './feedbackSection.module.css'

const Section = ({ title, children }) => (
    <section>
        <h2 className={css.statisticsTitle}>{title}</h2>
    {children}
    </section>
    
);

export default Section;