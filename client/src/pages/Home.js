import React, { Component } from "react";

import API from "../utils/API";
// import { Link } from 'react-router-dom';
import RandomHomeComponent from "../components/RandomHomeComponent";
import Jumbotron from "../components/Jumbotron/Jumbotron";

class Home extends Component {
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
      </>
    );
  }
}

export default Home;
