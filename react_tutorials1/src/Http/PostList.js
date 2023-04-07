import React, { Component } from "react";
import axios from "axios";
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch(() => {
        //console.log(error); 
        this.setState({
          error: " error retreving data",
        });
      });
  }
  render() {
    const { posts, error } = this.state;
    return (
      <>
        List of posts
        {posts.length
          ? posts.map((post) => {
              return <div key={post.id}>{post.title}</div>;
            })
          : error}
      </>
    );
  }
}

export default PostList;
