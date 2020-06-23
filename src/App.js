import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
      };
    }
    componentDidMount(){
      fetch('http://localhost:8000/Post')
      .then(res => res.json())
      .then(res => this.setState({post: res}))
    }
    render() {
      return (
        <div className="App">
          <h1>Boast or Roast</h1>
          {this.state.post.map((p) => {
            return (
              <li>
                <h2>{p.boast_or_roast}</h2>
                  Post: {p.post_title}<br/>
                  Date: {p.date}<br/>
                  Body: {p.body}<br/>
              </li>
              
            )
          }
          )}        
        </div>
      );
    }
  }
  export default App;
  