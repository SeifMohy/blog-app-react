import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";

const ApiPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          return setData(response.data);
        });
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((a) => (
        <ListGroup
          key={a.userId}
          as="ul"
          className="bg-light w-50 m-5 p-2 align-content-between justify-content-left"
        >
          <div className="d-flex justify-content-between align-text-center">
            <h2 className="">{a.title}</h2>{" "}
          </div>
          <div>
            <h6>{a.body}</h6>
          </div>
        </ListGroup>
      ))}
    </div>
  );
};

export default ApiPage;
