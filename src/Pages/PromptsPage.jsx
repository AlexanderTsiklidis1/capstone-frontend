import React from 'react';
import './PromptsPage.css'; 

//Hi guys, this is an array to house the data to render the prompts below, ideally we would want this in our backend though, with more prompts/tips listed as well
const interviewPrompts = [
  {
    question: "Can you describe a challenging situation you faced at work and how you handled it?",
    tips: [
      "Use the STAR method (Situation, Task, Action, Result) to structure your response.",
      "Be specific about the task and your responsibilities.",
      "Focus on the action you took and the positive outcome."
    ]
  },
  {
    question: "Tell me about a time you had to collaborate with a colleague who was difficult to work with.",
    tips: [
      "Highlight your interpersonal skills and ability to manage conflict.",
      "Discuss the importance of teamwork and the common goal.",
      "Stay positive and refrain from speaking poorly about others."
    ]
  },
];

const PromptsPage = () => {
  return (
    <div className="prompts-container">
      <h1 className="prompts-header">Behavioral Interview Prompts</h1>
      {interviewPrompts.map((prompt, index) => (
        <div key={index} className="prompt-item">
          <h2 className="prompt-question">{prompt.question}</h2>
          <ul className="prompt-tips">
            {prompt.tips.map((tip, tipIndex) => (
              <li key={tipIndex}>{tip}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PromptsPage;