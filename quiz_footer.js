'use strict';

/*
props: {
  className: string,
}
*/

class QuizFooter extends React.Component {
  QUIZZES = [
    { text: "food", link: "./food_quiz.html"},
    { text: "energy", link: "./energy_quiz.html"},
    { text: "transportation", link: "./transit_quiz.html"},
  ];

  constructor(props) {
    super(props);
  }

  render() {
    return e('div', { 
        className: cx("QuizFooter")
      }, 
      e('div', { className: "QuizFooter-home"},
        e('a', { className: "QuizFooter-homeLink", href: "./climate_change_tldr.html" }, "Head home"),
      ),
      e('div', { className: "QuizFooter-or"},
        "or"
      ),
      e('div', { className: "QuizFooter-otherQuizzes"},
        `Keep matching wits with our `,
        this.renderQuizLinks(),
      ),
      e('div', { className: "QuizFooter-copyright"},
        "tldrclimatechange.com (c) 2021 by Alice, Elizabeth, and Anand"
      ),
    );
  }

  renderQuizLinks() {
    const quizLinks = this.QUIZZES.map((quizInfo) => {
      console.log(quizInfo.link);
      return e('a', { href: quizInfo.link }, quizInfo.text);
    });

    const withSeparators = [];
    for (let i = 0; i < quizLinks.length; i++) {
      withSeparators.push(quizLinks[i]);
      if (i < quizLinks.length - 2) {
        withSeparators.push(", ");        
      } else if (i === quizLinks.length - 2) {
        withSeparators.push(", and ");
      } else if (i === quizLinks.length - 1) {
        withSeparators.push(" quizzes");
      }
    }


    return withSeparators;
  }
}

