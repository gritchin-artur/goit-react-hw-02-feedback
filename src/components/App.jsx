import React from "react"
import FeedbackOptions from './Buttons/feedbackButtons'
import Statistics from './Statistics/feedbackStatistics'
import Section from "./Section/feedbackSection";
import Notification from "./Notification/feedbackNotification";

    const options = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};
export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        isShowStatistics: false,
        isShowNotification: true,
    };
    
    handleFeedback = feedback => () => {
        this.setState({ isShowStatistics: true });
        this.setState({ isShowNotification: false });
        this.setState(prevFeetback => ({
            [feedback]: prevFeetback[feedback] + 1,
        }));
    };
    
        countTotalFeedback() {
            return this.state.good + this.state.neutral + this.state.bad;
    };

      countPositiveFeedbackPercentage() {
          return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };
    
    render() {
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();
        const isShowNotification = this.state.isShowNotification;
        const isShowStatistics = this.state.isShowStatistics;
    return (
        <div>
            <Section title="Please leave feedback">
            <FeedbackOptions
                options={options}
                    onLeaveFeedback={this.handleFeedback}
                /></Section>

            <Section title="Statistics">
                {isShowNotification && <Notification message="There is no feedback"/>}
       {isShowStatistics && <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
                    positiveFeedback={positiveFeedback}
                />}</Section>
            
        </div>
    )}
}