
import './components/interview.css';
import Post from "./components/Post";

function App({ interviewQuestion }) {

  return (
    <div className="wrapper">
      {interviewQuestion.map((item, i) => {
        return (
          <Post
            index={i + 1}
            question={item.question}
            url={item.URL}
            answer={item.answer}
            readCounter={0}
          />
        );
      }
      )}

    </div>
  );
}


export default App;
