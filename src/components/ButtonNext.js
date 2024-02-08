import { useQuiz } from "../contexts/QuizContext";

function ButtonNext() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) {
    return null;
  }
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        next
      </button>
    );
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finish
      </button>
    );
  }
}

export default ButtonNext;
