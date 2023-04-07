import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [btnId ,setbtnId] = useState(1)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
      .then((res) => {
        //console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [btnId]);

const clickHandler = () =>{
  setbtnId(id)
}

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      ></input>
      <button onClick={clickHandler}>fetch post</button>
      <div>
        <h3>TITLE</h3>{posts.title}
        <br></br>
        <h3>Body</h3>{posts.body}
      </div>
      {/*  <ul style={{ listStyle: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetch;
