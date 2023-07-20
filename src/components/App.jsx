import React from "react"
import Buttons from './feedbackButton/feedbackButtons'
import {Statistics} from './feedbackStatistics/feedbackStatistics'

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };


    handleIGood = () => {
        this.setState(prevGood => ({
            good: prevGood.good + 1,
        }));
    };
    handleNeutral = () => {
        this.setState(prevNeutral => ({
            neutral: prevNeutral.neutral + 1,
        }));
    };

    handleBad = () => {
            this.setState(prevBad => ({
                bad: prevBad.bad + 1,
            })); 
    } 
    
        countTotalFeedback() {
            return this.state.good + this.state.neutral + this.state.bad;
  }

      countPositiveFeedbackPercentage() {
          return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };
    
    render() {
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
        <div>
            <h1>Please leave feedback</h1>
            <Buttons
                onGood={this.handleIGood}
                onNeutral={this.handleNeutral}
                onBad={this.handleBad}
                 />
            <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
        </div>
    )}
}