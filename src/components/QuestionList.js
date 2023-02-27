import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {
  
  const renderQuestions = questions.map( question => <QuestionItem key={question.id} question={question}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{renderQuestions}</ul>
    </section>
  );
}

export default QuestionList;
