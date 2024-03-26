import React from "react";
import "./ResourcesPage.css";

const interviewPrompts = [
  {
    question:
      "Can you describe a challenging situation you faced at work and how you handled it?",
    tips: [
      "Use the STAR method (Situation, Task, Action, Result) to structure your response.",
      "Be specific about the task and your responsibilities.",
      "Focus on the action you took and the positive outcome.",
    ],
  },
  {
    question:
      "Tell me about a time you had to collaborate with a colleague who was difficult to work with.",
    tips: [
      "Highlight your interpersonal skills and ability to manage conflict.",
      "Discuss the importance of teamwork and the common goal.",
      "Stay positive and refrain from speaking poorly about others.",
    ],
  },
];

const ResourcesPage = () => {
  return (
    <div className="resources-container">
      <header className="resources-header">
        <h1>AceIt Interview Preparation Resources:</h1>
      </header>
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
      <div className="advice-section">
        <p className="advice-quote">
          "Practice makes perfect – simulate real interview scenarios!"
        </p>
        <p className="advice-quote">
          "Be clear, concise, and structured – use the STAR method."
        </p>
        <p className="advice-quote">
          "Reflect on your experiences – each one has a story to tell."
        </p>
      </div>
    </div>
  );
};

export default ResourcesPage;
