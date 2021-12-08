'use strict';


class EnergyQuiz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(QuizLayout, { 
      className: "EnergyQuiz-quizContents",
      quizTitle: "Test your knowledge - Energy Quiz",
      backgroundColor: "orange",
      quizToExcludeFromFooter: "energy",
      children: [      
        e(DragQuestion, {
          id: "#drag_question",
        }), 
      ],
    },     
    );
  }
}

renderIntoContainer('#energy_quiz', EnergyQuiz);
