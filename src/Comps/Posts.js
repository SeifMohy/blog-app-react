import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = ({ posts, setPosts }) => {
  //saving

  const delButton = (e) => {
    const deleted = posts.filter((a) => {
      console.log(a.id, parseInt(e.target.id));

      return a.id !== parseInt(e.target.id);
    });
    setPosts(deleted);
  };

  return (
    <div>
      <div>
        {posts.map((a) => (
          <ListGroup
            key={a.id}
            as="ul"
            className="bg-light w-50 m-5 p-2 align-content-between justify-content-left"
          >
            <div className="d-flex justify-content-between align-text-center">
              <h2 className="">{a.title}</h2>{" "}
              <h5 className="align-text-center m-0 fix-bottom">
                By: {a.author}
              </h5>
            </div>
            <div>
              <ListGroup.Item id={a.id} className="d-flex bg-white">
                {a.post}
              </ListGroup.Item>
            </div>
            <div className="d-flex justify-content-end m-2">
              <Button id={a.id} onClick={delButton} className="bg-danger m-1">
                Delete
              </Button>
              <div>
                <nav>
                  <Link to={`/posts/${a.id}`}>
                    <Button className="secondary m-1">Read More</Button>
                  </Link>
                </nav>
              </div>
            </div>
          </ListGroup>
        ))}
      </div>
    </div>
  );
};

export default Posts;
