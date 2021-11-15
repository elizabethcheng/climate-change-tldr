'use strict';


class PlateQuestion extends React.Component {
  correctAnswer = 2;

  constructor(props) {
    super(props);
  }

  _renderInput = (i, isSelected, anyAnswerSelected) => {
    const classNameIsSelected = isSelected ? "PlateQuestion-input--selected" : "";
    const classNameShowCorrect = (anyAnswerSelected && i === this.correctAnswer) ? "PlateQuestion-input--showCorrect" : "";
    const classNameShowIncorrect = (isSelected && i !== this.correctAnswer) ? "PlateQuestion-input--showIncorrect" : "";

    const correctnessIconVisible = (isSelected || i === this.correctAnswer) ? "PopupQuestion-correctness-icon--visible" : ""
    let correctnessIconSrc = "./images/check.png";
    if (isSelected && i !== this.correctAnswer) {
      correctnessIconSrc = "./images/remove.png";
    } else if (anyAnswerSelected && i === this.correctAnswer) {
      correctnessIconSrc = "./images/check.png";
    }

    return [
      e(
        'div',
        { className: "PlateQuestion-input " + classNameIsSelected + " " + classNameShowCorrect + " " + classNameShowIncorrect },
        e(
          'div',
          { className: "PlateQuestion-inputContent" },
          `${(i + 1) * 10}%`
        ),
      ),
      e(
        'img',
        {
          key: i,
          className: "PopupQuestion-correctness-icon " + correctnessIconVisible,
          src: correctnessIconSrc
        }
      )
    ];
  }

  _renderAnswer = (i) => {
    const correctOrIncorrectText = (i === this.correctAnswer) ? "Correct!" : "Nahhh, trick.";
    return e('div', { className: "PlateQuestion-answer" }, `${correctOrIncorrectText} Roughly 1/3 of food produced in factories and farms do not end up being consumed, meaning the energy and resources that went into producing these foods go to waste. This uneaten food accounts for a significant 8% of global emissions.` );    
  }

  render() {
    return e(PopUpQuestion, {
      className: "PlateQuestion",
      inputsContainerClassName: "PlateQuestion-inputsContainer",
      numInputs: 4,
      questionText: "1. What percentage of food ends up going to waste?",
      renderInput: this._renderInput,
      renderAnswer: this._renderAnswer,
    });
  }
}

(() => {
  const domContainer = document.querySelector('#plate_question');
  ReactDOM.render(e(PlateQuestion), domContainer);
})()
