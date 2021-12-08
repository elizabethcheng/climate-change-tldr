'use strict';

/*
props: {
  className: string,
  quizToExcludeFromFooter: "food" | "energy" | "transit",
}
*/

class QuizFooter extends React.Component {
  QUIZZES = [
    { quizId: "food", text: "food", emoji: "🥒", link: "./food_quiz.html"},
    { quizId: "energy", text: "energy", emoji: "⚡", link: "./energy_quiz.html"},
    { quizId: "transit", text: "transportation", emoji: "✈️", link: "./transit_quiz.html"},
  ];

  constructor(props) {
    super(props);
  }

  render() {
    return e('div', { 
        className: cx("QuizFooter", this.props.className)
      }, 
      e('div', { className: "QuizFooter-home"},
        e('a', { className: cx("QuizFooter-homeLink", "QuizFooter-link"), href: "./climate_change_tldr.html" }, "Head home"), " 🏠"
      ),
      e('div', { className: "QuizFooter-or"},
        "or"
      ),
      e('div', { className: "QuizFooter-otherQuizzes"},
        `Keep matching wits with our`,
      ),
      e('div', { className: "QuizFooter-quizLinks"},
        this.renderQuizLinks(),
      ),
      e('div', { className: "QuizFooter-copyright"},
        "tldrclimatechange.com (c) 2021 by Alice, Elizabeth, and Anand"
      ),
    );
  }

  renderQuizLinks() {
    const quizLinks = this.QUIZZES.filter(
      quizInfo => quizInfo.quizId !== this.props.quizToExcludeFromFooter
    ).map((quizInfo) => {
      return e('span', {}, e('a', { className: "QuizFooter-link", href: quizInfo.link }, quizInfo.text), ` ${quizInfo.emoji}`);
    });

    const withSeparators = [];

    if (quizLinks.length === 2) {
      withSeparators.push(quizLinks[0]);
      withSeparators.push(" and ");
      withSeparators.push(quizLinks[1]);
    } else {
      for (let i = 0; i < quizLinks.length; i++) {
        withSeparators.push(quizLinks[i]);
        if (i < quizLinks.length - 2) {
          withSeparators.push(", ");        
        } else if (i === quizLinks.length - 2) {
          withSeparators.push(", and ");
        }
      }
    }
 
    withSeparators.push(" quizzes");
    return withSeparators;
  }
}

