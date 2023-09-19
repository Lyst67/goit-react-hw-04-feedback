import React from "react"
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from "./Statistics/Statistics"
import { Section } from "./Section/Section"
import { Notification } from "components/Notification/Notification"
import { useState } from "react";
import css from './App.module.css'

export const App = () => {
  const [good, setGoog] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = ({ target: { name } }) => {
    if (name === "good") {
      setGoog(prevState => prevState + 1)
    }
    if (name === "neutral" ) {
      setNeutral(prevState => prevState + 1)
    }
    if (name === "bad" ) {
      setBad(prevState => prevState + 1)
    }
    }
  const countTotalFeedback = () => {
    return Object.values({good, neutral, bad}).reduce((acc, elem) => { return acc += elem }, 0);
  }
  const countPositiveFeedbackPercentage = () => {
    if (good > 0) { return Math.round((good * 100) / countTotalFeedback()) };
    return 0;
  }
  const options = Object.keys({ good, neutral, bad }) 
    return (
       <>
         <div className={css.feedback_card}>
          <Section title="Please leave feedback">
             <FeedbackOptions
                     options={options}
                     onLeaveFeedback={onLeaveFeedback }
                   /> 
          </Section>
          <Section title="Statistics">
            {!countTotalFeedback() ? (
              <Notification message="There is no feedback"
           /> 
            ) : (
            <Statistics
                     good={good}
                     neutral={neutral}
                     bad={bad}
                     total={countTotalFeedback()}
                     positivePercentage={countPositiveFeedbackPercentage()}
                   />    
            )}
                  </Section>     
          </div >
       </>  
     )
  }


