'use strict';


class FoodQuiz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(QuizLayout, { 
      className: "FoodQuiz-quizContents",
      quizTitle: "Test your knowledge - Food Quiz",
      backgroundColor: "green",
      quizToExcludeFromFooter: "food",
    },
      e(PlateQuestion, {
        id: "#plate_question",
      }),
      e(FoodCategoryQuestion, {
        id: "#food_category_question",
      }),
      e(FootprintQuestion, {
        id: "#footprint_question",
      }),      
    );
  }
}

renderIntoContainer('#food_quiz', FoodQuiz);
