import React, { useState } from "react";
import "../App.css";
import { ITEM } from "../routes/Path";
import PostList from "./PostList";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { submitPostsUsingThen } from "../Services/apiCalls";
function Shop({ history }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitPost = async () => {
    console.log("submit");
    try {
      const response = await submitPostsUsingThen({ title: title, body: body });
      console.log("response: " + response);
      history.push({
        pathname: ITEM,
        title: response.title,
        body: response.body,
      });
      // submitPostsUsingThen().then((response) => {
      //   console.log("Response from Submit: ", response);
      //   history.push({
      //     pathname: ITEM,
      //     title: response.title,
      //     body: response.body,
      //   });
      // });
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Done!");
    }
  };

  return (
    <div>
      <h1>Shop page</h1>
      <div>
        <TextField
          id="standard-password-input"
          label="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="Body"
          type="text"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <div>{'State: '+title + " " + body} </div>
      <div className="submitButton">
        <Button
          variant="contained"
          color="primary"
          onClick={() => submitPost()}
        >
          GO to Item Page
        </Button>
      </div>
    </div>
  );
}

export default Shop;
