import './components/interview.css';
import { useState } from 'react';
import Post from "./components/Post";

function App({ interviewQuestion }) {
  const countQuestion = interviewQuestion.length;
  const [list, setList] = useState(interviewQuestion);
  const [countQuestionKnow, setCounter] = useState(0);
  const listQuestion = list.map((item, i) => {
    return (
      <Post
        index={i + 1}
        question={item.question}
        url={item.URL}
        answer={item.answer}
        readCounter={0}
        countQuestionKnow={countQuestionKnow}
        handleKnowCounter={(countQuestionKnow) => {
          if (countQuestionKnow <= countQuestion)
            setCounter(countQuestionKnow);
        }}
      //interviewQuestionChange={(readCounter, question) => {
      // const newInterviewQuestion = listQuestion.map(el){}
      // setInterviewQuestion(newInterviewQuestion);
      //}}
      />
    );
  }
  );
  const sortQuestion = listQuestion.sort(
    (a, b) => b.readCounter - a.readCounter
  );
  return (
    <div className="wrapper">
      <div className='itemTitle'>Ви відповіли на {countQuestionKnow}/{countQuestion} питань </div>
      <div> {sortQuestion}</div>
    </div>
  );
}


export default App;
