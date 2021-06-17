'use strict';

class PlateQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderInput = (i, isSelected) => {
    const classNameIsSelected = isSelected ? "PlateQuestion-input--selected" : "";
    return e('div', { 
      className: "PlateQuestion-input " + classNameIsSelected 
    }, `${(i + 1) * 10}%`)
  }

  _renderAnswer = (i) => {
    return e('div', { className: "PlateQuestion-answer" }, `Good job!${i}` );    
  }

  render() {
    return e(PopUpQuestion, {
      className: "PlateQuestion",
      numInputs: 4,
      renderInput: this._renderInput,
      renderAnswer: this._renderAnswer,
    });
  }
}

(() => {
  const domContainer = document.querySelector('#plate_question');
  ReactDOM.render(e(PlateQuestion), domContainer);
})()
