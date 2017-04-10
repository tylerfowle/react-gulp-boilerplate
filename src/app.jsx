class MyComponent extends React.Component {
  render(){
    return (
      <div className="hello-world">
        Hello World
      </div>
    )
  }
}

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('app')
);
