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
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitPost = async () => {
    try {
      // setIsLoading(true);
      // const response = await submitPostsUsingThen({ title: title, body: body });
      // console.log("response: " + response);
      // history.push({
      //   pathname: ITEM,
      //   title: response.title,
      //   body: response.body,
      // });
      submitPostsUsingThen({
        userId: userId,
        id: id,
        title: title,
        body: body,
      }).then((response) => {
        setIsLoading(true);
        console.log("Response from Submit: ", response);
        history.push({
          pathname: ITEM,
          title: response.title,
          body: response.body,
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <h1>Shop page</h1>
      <div>
        <TextField
          label="ID"
          type="text"
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="UserId"
          type="text"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Body"
          type="text"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <div>{"State: " + title + " " + body} </div>
      <div className="submitButton">
        <Button variant="contained" color="primary" onClick={submitPost}>
          GO to Item Page
        </Button>
      </div>

      {isLoading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
    </React.Fragment>
  );
}

export default Shop;
