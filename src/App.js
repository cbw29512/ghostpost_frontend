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
      fetch('http://localhost:8000/Post/')
      .then(res => res.json())
      .then(res => this.setState({post: res}))
    }
    handleClickAllPosts=(event)=>{
      fetch('http://localhost:8000/Post/')
      .then(res => res.json())
      .then(res => this.setState({post: res}))
    }

    handleClickAllRoast=(event)=>{
      fetch('http://127.0.0.1:8000/Post/boast/')
      .then(res => res.json())
      .then(res => this.setState({post: res}))
    }

    handleClickAllBoast=(event)=>{
      fetch('http://localhost:8000/Post/roast/')
      .then(res => res.json())
      .then(res => this.setState({post: res}))
    }

    handleHighestVote = (event) => {
      fetch('http://127.0.0.1:8000/Post/highestvotes/')
      .then(res => res.json())
      .then(res => this.setState({post: res}))
    }

    handleUpVote = (id) => {
      let responseBody = {
        method: "POST",
      }
      fetch(`http://localhost:8000/Post/${id}/upvotes/`, responseBody)
      this.handleClickAllPosts()
    }

    handleDownVote = (id) => {
      let responseBody = {
        method: "POST",
      }
      fetch(`http://localhost:8000/Post/${id}/downvotes/`, responseBody)
      this.handleClickAllPosts()
    }

    render() {
      return (
        <div className="App">
          <h1>Boast or Roast</h1>
          <button onClick={this.handleClickAllPosts}>Home</button>
          <button onClick={this.handleClickAllRoast}>Roast</button>
          <button onClick={this.handleClickAllBoast}>Boast</button>
          <a href = 'http://127.0.0.1:8000/addpost/'><button>Add Post</button></a>
          <button onClick={this.handleHighestVote}>Highest Votes</button>
          
          {this.state.post.map((p) => {
            return (
              <li>
                <h2>{p.boast_or_roast}</h2>
                  Post: {p.post_title}<br/>
                  Date: {p.date}<br/>
                  Body: {p.body}<br/>
                  <button OnClick={()=>this.handleUpVotes}>UpVotes {p.upvotes}</button>
                  <button OnClick={()=>this.handleUpVotes}>DownVotes {p.downvotes}</button>
              </li>
              
            )
          }
          )}        
        </div>
      );
    }
  }
  export default App;
  