import React, { Component } from "react";

import API from "../utils/API";
// import { Link } from 'react-router-dom';
import RandomHomeComponent from "../components/RandomHomeComponent";
import Jumbotron from "../components/Jumbotron/Jumbotron";

class Dashboard extends Component {
  state = {
    posts: [],
    title: "",
    body: "",
    category: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  onClick = () =>
    API.createPost({
      title: this.state.title,
      body: this.state.body,
      category: this.state.category
    }).then(() =>
      this.setState({
        posts: [
          ...this.state.posts,
          {
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
          }
        ]
      })
    );
  render() {
    return (
      <>
        <Jumbotron />
        <div>
          {JSON.stringify(this.state.posts)}
          <RandomHomeComponent />
          <div>
            <input
              type="text"
              value={this.state.title}
              label="title"
              onChange={this.onChange("title")}
            />
            <input
              type="text"
              value={this.state.body}
              label="body"
              onChange={this.onChange("body")}
            />
            <input
              type="text"
              value={this.state.category}
              label="category"
              onChange={this.onChange("category")}
            />
            <button onClick={this.onClick}>Create</button>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
