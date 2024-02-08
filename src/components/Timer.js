import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { remainingTime, dispatch } = useQuiz();
  const mins = Math.floor(remainingTime / 60);
  const secs = Math.floor(remainingTime % 60);
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "setTime" });
      }, 1000);
      return () => clearInterval(id);
    },

    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
