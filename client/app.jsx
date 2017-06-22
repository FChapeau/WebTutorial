var React = require('react');
var reactDom = require('react-dom');

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <div>Hello Wurld</div>
  }
}
reactDom.render(
  <App/>,
  document.getElementById('content')
)
