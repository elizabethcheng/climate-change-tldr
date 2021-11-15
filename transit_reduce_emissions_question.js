'use strict';


class ReduceEmissionsQuestion extends React.Component {
  correctAnswer = 3;
  answerTexts = ["Buy an electric car", "Take public transportation", "Carpool", "All of the above"];

  constructor(props) {
    super(props);
  }

  _renderInput = (i, isSelected, anyAnswerSelected) => {
    const classNameIsSelected = isSelected ? "ReduceEmissionsQuestion-input--selected" : "";
    const classNameShowCorrect = (anyAnswerSelected && i === this.correctAnswer) ? "ReduceEmissionsQuestion-input--showCorrect" : "";
    const classNameShowIncorrect = (isSelected && i !== this.correctAnswer) ? "ReduceEmissionsQuestion-input--showIncorrect" : "";

    const correctnessIconVisible = (isSelected || (anyAnswerSelected && i === this.correctAnswer)) ? "PopUpQuestion-correctness-icon--visible" : ""
    let correctnessIconSrc = "./images/check.png";
    if (isSelected && i !== this.correctAnswer) {
      correctnessIconSrc = "./images/remove.png";
    } else if (anyAnswerSelected && i === this.correctAnswer) {
      correctnessIconSrc = "./images/check.png";
    }

    return [
      e(
        'div',
        { className: "ReduceEmissionsQuestion-input " + classNameIsSelected + " " + classNameShowCorrect + " " + classNameShowIncorrect },
        e('div', {
          className: "ReduceEmissionsQuestion-inputContent"
        }, `${this.answerTexts[i]}`)
      ),
      e(
        'img',
        {
          key: i,
          className: "PopUpQuestion-correctness-icon " + correctnessIconVisible,
          src: correctnessIconSrc
        }
      )
    ];
  }

  _renderAnswer = (i) => {
    const correctOrIncorrectText = (i === this.correctAnswer) ? "Correct!" : "Nahhh, trick.";
    return e('div', { className: "ReduceEmissionsQuestion-answer" }, `${correctOrIncorrectText} You can reduce your day to day carbon footprint by considering alternatives to driving your car, or switching to an electric or more fuel efficient car. Consider biking, walking, carpooling with a friend, or taking a bus whenever you can.`);
  }

  render() {
    return e(PopUpQuestion, {
      className: "ReduceEmissionsQuestion",
      inputsContainerClassName: "ReduceEmissionsQuestion-inputsContainer",
      numInputs: 4,
      questionText: "3. What can you do to reduce carbon emissions caused by driving your car?",
      renderInput: this._renderInput,
      renderAnswer: this._renderAnswer,
    });
  }
}

(() => {
  const domContainer = document.querySelector('#reduce_emissions_question');
  ReactDOM.render(e(ReduceEmissionsQuestion), domContainer);
})()
