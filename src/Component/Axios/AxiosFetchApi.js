import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";

function UseLayoutHook() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.data)
      .then((res) => {
        console.log("res", res);
        setUserPosts(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  console.log("userPosts", userPosts);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  return (
    <div className="grid grid-cols-4 gap-3 my-5 mx-5">
      {userPosts?.length > 0 &&
        userPosts.map((list) => {
          return (
            <>
            <div className="border rounded shadow">
              <h1 className=" text-center">{list.title}</h1>
              <img src={list.url} />
            </div>
            </>
          );
        })}
    </div>
  );
}

export default UseLayoutHook;