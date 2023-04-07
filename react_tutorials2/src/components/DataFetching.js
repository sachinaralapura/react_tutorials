import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState("");
  const [id, setId] = useState(1);
  const [btnid, setBtnId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnid}`)
      .then((response) => {
        //console.log(response.data)
        setPost(JSON.stringify(response.data));
        setError("");
        setLoading(false);
      })
      .catch(() => {
        setPost("");
        setError("something went wrong");
        setLoading(false);
      });
  }, [btnid]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      ></input>
      <button onClick={() => setBtnId(id)}>DataFetch</button>
      <div>
        {loading ? "loading" : post}
        {error ? error : null}
      </div>
    </div>
  );
}

export default DataFetching;
