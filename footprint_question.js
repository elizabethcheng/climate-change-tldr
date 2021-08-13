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

    return e('div', { 
      className: "FootprintQuestion-input " + classNameIsSelected + " " + classNameShowCorrect + " " + classNameShowIncorrect
    },
      e('div', { 
        className: "FootprintQuestion-inputContent"
      }, `${30 + (i) * 20}%`)
    );
  }

  _renderAnswer = (i) => {
    const correctOrIncorrectText = (i === this.correctAnswer) ? "Correct!" : "Nahhh, trick.";
    return e('div', { className: "FootprintQuestion-answer" }, `${correctOrIncorrectText} The Impossible Burger has an 89% smaller carbon footprint, uses 87% less water, and 96% less land than a regular burger made from beef.` );    
  }

  render() {
    const questionText = "3. More and more people are turning to plant-based substitutes for meat such as the Beyond Burger and the Impossible burger. How much smaller is the carbon footprint of the Impossible Burger than that of a burger made from beef?";

    return e(PopUpQuestion, {
      className: "FootprintQuestion",
      inputsContainerClassName: "FootprintQuestion-inputsContainer",
      numInputs: 4,
      questionText,
      renderInput: this._renderInput,
      renderAnswer: this._renderAnswer,
    });
  }
}

(() => {
  const domContainer = document.querySelector('#footprint_question');
  ReactDOM.render(e(FootprintQuestion), domContainer);
})()
