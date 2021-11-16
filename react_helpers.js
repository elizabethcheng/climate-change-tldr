'use strict';

// use this to define global helpers
const React = window.React;
const e = React.createElement;

const renderIntoContainer = (querySelector, reactClass) => {
  const domContainer = document.querySelector(querySelector);
  ReactDOM.render(e(reactClass), domContainer);    
}

/**
 * Concatenates classNames
 * 
 * Examples:
 *      cx(this.props.className, "NewClassName")
 *      cx({ "ConditionalClassName": this.state.shouldAddClass }, "AlwaysAddThisClass")
 * 
 * Arguments: 
 * 
 *  arg: { [key: string]: boolean } | string | undefined,
 *  ...extraClasses: (string | undefined)[]
 * 
 * @returns string
 */
const cx = (
    arg,
    ...extraClasses
) => {
    let className = "";
    if (typeof arg === "object") {
        for (const name in arg) {
            if (arg.hasOwnProperty(name) && arg[name]) {
                className += " " + name;
            }
        }
    } else if (arg) {
        className = " " + arg;
    }

    let i; // number
    for (i = 0; i < extraClasses.length; ++i) {
        if (extraClasses[i]) {
            className += " " + extraClasses[i];
        }
    }
    return className.substr(1);
}
