'use strict';


class FlightQuestion extends React.Component {
  answerTexts = ["<1,000 miles (1 roundtrip flight from SF to LA)", "5,000 miles (1 roundtrip flight from SF to NY)", "10,000 miles (1 roundtrip flight from SF to London)", "15,000 miles (1 roundtrip flight from SF to Australia)", "15,000 miles+"];

  explanationSuffix= "To give you some perspective, in order to keep average temperatures from rising to 2 degrees or lower, each person should average only 2 tonnes of CO2 emissions per year."
  emissions = [
    "0.307",
    "1.4",
    "2.8",
    "4",
    "more than 4"
  ];

  constructor(props) {
    super(props);
  }

  _renderInput = (i, isSelected, anyAnswerSelected) => {
    const classNameIsSelected = isSelected ? "FlightQuestion-input--selected" : "";
    return e('div', {
      className: "FlightQuestion-input " + classNameIsSelected
    },
      e('div', {
        className: "FlightQuestion-inputContent"
      }, `${this.answerTexts[i]}`)
    );
  }

  _renderAnswer = (i) => {
    return e('div', { className: "FlightQuestion-answer" }, `Your flights contribute ${this.emissions[i]} tonnes of CO2 emissions per year. ${this.explanationSuffix}`);
  }

  render() {
    return e(PopUpQuestion, {
      className: cx("FlightQuestion", this.props.className),
      inputsContainerClassName: "FlightQuestion-inputsContainer",
      numInputs: 5,
      questionText: "2. On average, how many miles do you fly each year?",
      renderInput: this._renderInput,
      renderAnswer: this._renderAnswer,
    });
  }
}
