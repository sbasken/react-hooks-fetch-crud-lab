import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [ page, setPage ] = useState("List");
  const [ questions, setQuestions ] = useState([])

  const handleUpdateQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map( question => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion
      } else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  const handleDeleteQuestion = (id) => {
    const updatedQuestions = questions.filter( question => question.id !== id)
    setQuestions(updatedQuestions)
  }

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(questionList => setQuestions(questionList))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion}/>}
    </main>
  );
}

export default App;
