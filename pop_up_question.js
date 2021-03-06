'use strict';

/*
props: {
  className: string,
  inputsContainerClassName: string;
  numInputs: number;
  questionText: string;
  renderInput: (numInput: number, isSelected: boolean) => ReactElement;
  renderAnswer: (numInput: number) => ReactElement;
}
*/
class PopUpQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selected: -1, 
    };
  }

  _renderInput(i) {
    return e(
      'div',
      { 
        key: i,
        className: "PopUpQuestion-input",
        onClick: () => this.setState({ selected: i }),
      },
      this.props.renderInput(i, this.state.selected === i, this.state.selected !== -1),
    );    
  }

  _renderInputs() {
    return Array.from(Array(this.props.numInputs).keys()).map((i) => {
      return this._renderInput(i);
    })
  }

  render() {
    return e(
      'div',
      { className: cx("PopUpQuestion", this.props.className) },
      e('div', { className: "PopUpQuestion-question"}, this.props.questionText),
      e(
        'div',
        { className: "PopUpQuestion-inputs " + this.props.inputsContainerClassName },
        this._renderInputs(),
      ),
      this.state.selected !== -1 ? this.props.renderAnswer(this.state.selected) : null,
    );
  }
}

