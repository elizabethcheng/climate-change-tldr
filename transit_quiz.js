'use strict';


class TransitQuiz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(QuizLayout, { 
      className: "TransitQuiz-quizContents",
      quizTitle: "Test your knowledge - Transportation Quiz",
      backgroundColor: "yellow",
    },
      e(GreenhouseGasesQuestion, {
        id: "#greenhouse_gases_question",
      }),
      e(FlightQuestion, {
        id: "#flight_question",
      }),
      e(ReduceEmissionsQuestion, {
        id: "#reduce_emissions_question",
      }),      
    );
  }
}

renderIntoContainer('#transit_quiz', TransitQuiz);
