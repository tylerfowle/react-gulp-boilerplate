"use strict";

var MyComponent = React.createClass({
  displayName: "MyComponent",

  render: function render() {
    return React.createElement(
      "div",
      { className: "header" },
      React.createElement(
        "div",
        { className: "search-icon" },
        "search"
      )
    );
  }
});

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('app'));