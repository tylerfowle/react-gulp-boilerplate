var MyComponent = React.createClass({
  render: function(){
    return (
      <div className="header">
        <div className="search-icon">search</div>
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('app')
);
