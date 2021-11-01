'use strict';


class GreenhouseGasesQuestion extends React.Component {
  correctAnswer = 2;
  answerTexts = ["3%", "7%", "14%", "20%"];

  constructor(props) {
    super(props);
  }

  _renderInput = (i, isSelected, anyAnswerSelected) => {
    const classNameIsSelected = isSelected ? "GreenhouseGasesQuestion-input--selected" : "";
    const classNameShowCorrect = (anyAnswerSelected && i === this.correctAnswer) ? "GreenhouseGasesQuestion-input--showCorrect" : "";
    const classNameShowIncorrect = (isSelected && i !== this.correctAnswer) ? "GreenhouseGasesQuestion-input--showIncorrect" : "";

    return e('div', {
      className: "GreenhouseGasesQuestion-input " + classNameIsSelected + " " + classNameShowCorrect + " " + classNameShowIncorrect
    },
      e('div', {
        className: "GreenhouseGasesQuestion-inputContent"
      }, `${this.answerTexts[i]}`)
    );
  }

  _renderAnswer = (i) => {
    const correctOrIncorrectText = (i === this.correctAnswer) ? "Correct!" : "Nahhh, trick.";
    return e('div', { className: "GreenhouseGasesQuestion-answer" }, `${correctOrIncorrectText} According to Project Drawdown, the transportation sector accounts for roughly 14% of global greenhouse gas emissions.`);
  }

  render() {
    return e(PopUpQuestion, {
      className: "GreenhouseGasesQuestion",
      inputsContainerClassName: "GreenhouseGasesQuestion-inputsContainer",
      numInputs: 4,
      questionText: "1. What percentage of greenhouse gases is the transportation sector responsible for?",
      renderInput: this._renderInput,
      renderAnswer: this._renderAnswer,
    });
  }
}

(() => {
  const domContainer = document.querySelector('#greenhouse_gases_question');
  ReactDOM.render(e(GreenhouseGasesQuestion), domContainer);
})()
