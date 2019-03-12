# Answers

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    Created by engineers at Facebook to help them quickly render their user interface. Developers will often use it as the 'View' in the MVC design pattern. It renders on the DOM and utilizes an engine known as the Virtual DOM to handle a lot of the work, to offload the DOM. It attempts to solve the smooth rendering of a complex UI/UX and keeping it quick.

- [ ] What does it mean to _think_ in react?

    Taken from the DOCS at https://reactjs.org/docs/thinking-in-react.html

    Create a mock-up of the project. I use a whiteboard... because I don't have a designer feeding me layouts.
    Try to break down the project into a component hierarchy, determine which components will be nested in others.
    Build out a static React version of the project
    Begin adding reactive UI with state/ figure out where your state will live
    Create inverse data flow


- [ ] Describe state.

  state contains information for the component to initialise, change, and use on it's own.
    

- [ ] Describe props.

    props contain information set by the parent component and should not be mutated

    ... props are a way of passing data from parent to child. ... State is reserved only for interactivity, that is, data that changes over time. --Facebook