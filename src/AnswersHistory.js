import React from 'react';
import PropTypes from "prop-types";

const AnswersHistory = (props) => {
    const renderAnswerHistory = (key) => {
        return (
            <tr key={key.answerId}>
                <td>
                    {key.question}
                </td>
                <td>
                    {key.answer}
                </td>
                <td>
                    {key.correctAnswer}
                </td>
            </tr>
        );
    };
    return (
        <table>
            <thead>
            <tr>
                <th>
                    Question
                </th>
                <th>
                    Your answer
                </th>
                <th>
                    Correct answer
                </th>
            </tr>
            </thead>
            <tbody>
            {props.answers.map(renderAnswerHistory)}
            </tbody>
        </table>
    );
};

AnswersHistory.propTypes = {
    answers: PropTypes.array.isRequired
};

export default AnswersHistory;