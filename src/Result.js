import React from 'react';
import PropTypes from 'prop-types';
import AnswersHistory from "./AnswersHistory";

function Result(props) {
    return (
        <div className="result">
            Your score is <strong>{props.quizResult}</strong>
            {props.historyList.length ? <AnswersHistory answers={props.historyList}/> : null}
            <button onClick={props.onClick}>Play Again</button>
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.number.isRequired,
    historyList: PropTypes.array.isRequired
};

export default Result;