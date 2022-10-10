import { useState } from "react";
import "./interview.css";
import { MdArrowCircleDown } from "react-icons/md";
import { AiOutlineQuestion } from "react-icons/ai";

function Post({ question, answer, url, index, readCounter }) {
    const [Iknow, setIknow] = useState(false);
    const [ask, setAsk] = useState(false);
    const [reader, setReadCounter] = useState(readCounter);
    const [activeState, setActiveState] = useState(true);

    const increaseReader = (e) => {
        setReadCounter(reader + 1);
        setIknow('Iknow');
        if (ask) {
            setAsk(prev => !prev);
        }
        if (!activeState) {
            setActiveState(prev => !prev);
        }
    };

    const AskСhangeColor = (e) => {
        setAsk(prev => !prev);
    };

    const addActiveClass = (e) => {
        setActiveState(prev => !prev);
        setIknow(false);
        setReadCounter(0);
    };

    return (
        <div className={`itemQuestion ${Iknow ? 'Iknow' : ''}  ${ask ? 'NeedAsk' : ''}`}>
            <div><span>{index}.</span>{question}</div>
            <div>я відповів вже {reader} разів</div>
            <button type="button" onClick={increaseReader}>я знаю відповідь + </button>
            <button onClick={addActiveClass}>Вчити <MdArrowCircleDown /></button>
            <button onClick={AskСhangeColor}>Спитати<AiOutlineQuestion /></button>
            <div className={`answer ${activeState ? 'active' : ''}`}><hr></hr>{answer}<a target="_blank" rel="noopener noreferrer" href={url}> Дивись детально тут</a></div>
        </div>
    );
}
export default Post;
