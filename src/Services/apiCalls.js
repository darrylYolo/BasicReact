const baseurl = "https://jsonplaceholder.typicode.com";
const baseurlMine = "http://192.168.50.28:8080";

export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${baseurlMine}/posts`)
        .then((response) => {
          console.log(response);
          response.json();
        })
        .then((json) => {
          console.log(json);
          return resolve(json);
        });
    } catch (error) {
      console.error(error);
      return reject(error);
    } finally {
      console.log("do something after the call");
    }
  });
};

export const getPostsUsingThen = (id) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${baseurlMine}/posts/${id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          return resolve(json);
        });
    } catch (error) {
      console.error(error);
      return reject(error);
    } finally {
      console.log("do something after the call");
    }
  });
};

export const getPostsUsingAwait = async (id) => {
  try {
    const response = await fetch(`${baseurl}/posts/${id}`);
    // console.log(await response.json()); // this works

    // console.log(response.json()) //this does not work
    // return Promise.resolve(await response.json());
    return response.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  } finally {
    console.log("do something after the call");
  }
};

export const submitPostsUsingThen = (request) => {
  console.log('request! '+request);
  return new Promise((resolve, reject) => {
    try {
      fetch(`${baseurlMine}/posts`, {
        method: "POST",
        body: JSON.stringify({
          userId: 91,
          id: 91,
          title: "bar",
          body: "bar",
        }),
        headers: {
          "Content-type": "application/json;",
        },
      }).then((response) => {
        console.log(response.json);
        return resolve(response.json());
      });
    } catch (error) {
      console.error(error);
      return reject(error);
    } finally {
      console.log("do something after the call");
    }
  });
};

export const postSomethingUsingAwait = () => async () => {
  try {
    const response = fetch(`${baseurl}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response.json);
    return Promise.resolve(response.json());
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  } finally {
    console.log("do something after the call");
  }
};

export const deleteSomethingUsingThen = (id) => {
  try {
    fetch(`${baseurl}/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return Promise.resolve(json);
      });
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  } finally {
    console.log("do something after the call");
  }
};
