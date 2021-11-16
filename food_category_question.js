'use strict';


class FoodCategoryQuestion extends React.Component {
  correctAnswer = 0;
  answerTexts = ["Beef", "Shrimp", "Chicken", "Tofu"];

  constructor(props) {
    super(props);
  }

  _renderInput = (i, isSelected, anyAnswerSelected) => {
    const classNameIsSelected = isSelected ? "FoodCategoryQuestion-input--selected" : "";
    const classNameShowCorrect = (anyAnswerSelected && i === this.correctAnswer) ? "FoodCategoryQuestion-input--showCorrect" : "";
    const classNameShowIncorrect = (isSelected && i !== this.correctAnswer) ? "FoodCategoryQuestion-input--showIncorrect" : "";

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
        { className: "FoodCategoryQuestion-input " + classNameIsSelected + " " + classNameShowCorrect + " " + classNameShowIncorrect },
        e('div', {
          className: "FoodCategoryQuestion-inputContent"
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
    const correctOrIncorrectText = (i === this.correctAnswer) ? "Correct!" : "Mooooo. The steaks are high.";
    return e('div', { className: "FoodCategoryQuestion-answer" }, `${correctOrIncorrectText} It costs 60 kg CO2 to produce 1 kg of beef, compared to 12 kg CO2 for 1kg of shrimp, 6 kg CO2 for 1 kg of chicken, and 3 kg CO2 for 1 kg of tofu. Take a look at the carbon footprints of various foods - [insert graph here]. In general, eating less meat and more plant-based foods (think beans, tofu, vegetables) will significantly reduce your carbon footprint.` );
  }

  render() {
    return e(PopUpQuestion, {
      className: "FoodCategoryQuestion",
      inputsContainerClassName: "FoodCategoryQuestion-inputsContainer",
      numInputs: 4,
      questionText: "2. Which of the following foods contributes most to carbon emissions?",
      renderInput: this._renderInput,
      renderAnswer: this._renderAnswer,
    });
  }
}

renderIntoContainer('#food_category_question', FoodCategoryQuestion);
