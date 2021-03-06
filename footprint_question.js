'use strict';

class FootprintQuestion extends React.Component {
  correctAnswer = 3;

  constructor(props) {
    super(props);
  }

  _renderInput = (i, isSelected, anyAnswerSelected) => {
    const classNameIsSelected = isSelected ? "FootprintQuestion-input--selected" : "";
    const classNameShowCorrect = (anyAnswerSelected && i === this.correctAnswer) ? "FootprintQuestion-input--showCorrect" : "";
    const classNameShowIncorrect = (isSelected && i !== this.correctAnswer) ? "FootprintQuestion-input--showIncorrect" : "";

    const correctnessIconVisible = (isSelected || (anyAnswerSelected && i === this.correctAnswer)) ? "PopUpQuestion-correctness-icon--visible" : ""
    let correctnessIconSrc = "./images/check.png";
    if (isSelected && i !== this.correctAnswer) {
      correctnessIconSrc = "./images/remove.png";
    } else if (anyAnswerSelected && i === this.correctAnswer) {
      correctnessIconSrc = "./images/check.png";
    }

    return [
      e(
        'img',
        {
          className: "FootprintQuestion-input " + classNameIsSelected + " " + classNameShowCorrect + " " + classNameShowIncorrect,
          src: "./images/footprint.png"
        }
      ),
      e(
        'div',
        { className: "FootprintQuestion-inputContent" },
        `${30 + (i) * 20}%`
      ),
      e(
        'img',
        {
          key: i,
          className: "PopUpQuestion-correctness-icon " + correctnessIconVisible,
          src: correctnessIconSrc
        }
      ),
    ];
  }

  _renderAnswer = (i) => {
    const correctOrIncorrectText = (i === this.correctAnswer) ? "Correct!" : "Nahhh, trick.";
    return e('div', { className: "FootprintQuestion-answer" }, `${correctOrIncorrectText} The Impossible Burger has an 89% smaller carbon footprint, uses 87% less water, and 96% less land than a regular burger made from beef.` );    
  }

  render() {
    const questionText = "3. More and more people are turning to plant-based substitutes for meat such as the Beyond Burger and the Impossible burger. How much smaller is the carbon footprint of the Impossible Burger than that of a burger made from beef?";

    return e(PopUpQuestion, {
      className: cx("FootprintQuestion", this.props.className),
      inputsContainerClassName: "FootprintQuestion-inputsContainer",
      numInputs: 4,
      questionText,
      renderInput: this._renderInput,
      renderAnswer: this._renderAnswer,
    });
  }
}
