'use strict';

/*
props: {
  className: string,
  quizTitle: string,
  backgroundColor: "orange" | "green" | "yellow",
  quizToExcludeFromFooter: "food" | "energy" | "transit"
}
*/

class QuizLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.backgroundColor);
    return e('div', { 
        className: cx({
          "QuizLayout--orange": this.props.backgroundColor === "orange",
          "QuizLayout--green": this.props.backgroundColor === "green",
          "QuizLayout--yellow": this.props.backgroundColor === "yellow",
        }, "QuizLayout")
      }, 
      e('div', { className: "QuizLayout-contents"},
        e('div', { className: "QuizLayout-header"}, 
          e('a', {
              className: "QuizLayout-headerLink",
              href: "climate_change_tldr.html"
            }, 
            "<- Back to TLDR: Climate Change"
          ),
        ),
        e('div', { className: "QuizLayout-title"}, this.props.quizTitle), 
        e('div', { className: "QuizLayout-questions"},
          this.props.children.map((question) => React.cloneElement(question, {
              className: cx(question.props.className, "QuizLayout-question"),
            })
          ),
        ),
        e('hr', { className: "QuizLayout-footerDivider" }),  
        e(QuizFooter, { className: "QuizLayout-footer", quizToExcludeFromFooter: this.props.quizToExcludeFromFooter }),
      ),
    );
  }
}

