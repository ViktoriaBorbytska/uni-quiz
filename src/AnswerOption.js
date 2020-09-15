import React from 'react';
import PropTypes from "prop-types";

const AnswerOption = (props) => {
    return (
        <li className="answerOption">
            <input type="radio"
                   className="radioCustomButton"
                   name="radioGroup"
                   checked={props.answerValue === props.answer}
                   id={props.answerValue}
                   value={props.answerValue}
                   onChange={props.onAnswerSelected} />
            <label className="radioCustomLabel" htmlFor={props.answerValue}>
                {props.answerContent}
            </label>
        </li>
    );
};

AnswerOption.propTypes = {
    answerValue: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;