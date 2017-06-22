// Create the React application with some content.
var App = React.createClass({
  render: function() {
    return <p>Hello World</p>;
  }
});

// Render the application to the DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

