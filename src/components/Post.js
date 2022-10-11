import { useState } from "react";
import "./interview.css";
import { MdArrowCircleDown } from "react-icons/md";
import { AiOutlineQuestion } from "react-icons/ai";

function Post({ question, answer, url, index, readCounter }) {
    const [Iknow, setIknow] = useState(false);
    const [ask, setAsk] = useState(false);
    const [reader, setReadCounter] = useState(readCounter);
    const [learn, setLearn] = useState(true);

    const handleKnow = (e) => {
        setReadCounter(reader + 1);
        setIknow(true);
        if (ask) {
            setAsk(prev => !prev);
        }
        if (!learn) {
            setLearn(prev => !prev);
        }
    };

    const handleAsk = (e) => {
        console.log(ask);
        setAsk(prev => !prev);
    };

    const handleLearn = (e) => {
        setLearn(prev => !prev);
        setIknow(false);
        setReadCounter(0);
    };

    return (
        <div className={`itemQuestion ${Iknow ? 'Iknow' : ''}  ${ask ? 'NeedAsk' : ''}`}>
            <div><span>{index}.</span>{question}</div>
            <div>я відповів вже {reader} разів</div>
            <button type="button" onClick={handleKnow}>я знаю відповідь + </button>
            <button onClick={handleLearn}>Вчити <MdArrowCircleDown /></button>
            <button onClick={handleAsk}>Спитати<AiOutlineQuestion /></button>
            <div className={`answer ${learn ? 'active' : ''}`}><hr></hr>{answer}<a target="_blank" rel="noopener noreferrer" href={url}> Дивись детально тут</a></div>
        </div>
    );
}
export default Post;
