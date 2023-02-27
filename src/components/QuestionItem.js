import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleUpdate = (e, id) => {
    console.log("value", e.target.value)
    console.log("id", id)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ correctIndex: parseInt(e.target.value)})
    })
      .then(res => res.json())
      .then(updatedQuestion => onUpdateQuestion(updatedQuestion))
  }

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    }) 
    .then(res => res.json())
    .then(() => onDeleteQuestion(id))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => handleUpdate(e, id)}>{options}</select>
      </label>
      <button onClick={()=>handleDeleteClick(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
