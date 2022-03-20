import React, { useState } from "react";
import { Button, Navbar as BNavbar, Nav } from "react-bootstrap";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Navbar = ({ posts, setPosts }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <BNavbar bg="warning d-flex justify-content-between px-5" variant="light">
        <Link to="/" id="title">
          <h1>Bonkers!</h1>
        </Link>

        <Link to="/API">
          <h5>Read More!</h5>
        </Link>
        <Link to="/APITests">
          <h5>Some Jobs!</h5>
        </Link>
        <Link to="/Kanye">
          <h5>Kanye West!</h5>
        </Link>

        <Button className="" variant="secondary" onClick={handleShow}>
          Add!
        </Button>
      </BNavbar>
      <Modal
        handleClose={handleClose}
        show={show}
        handleShow={handleShow}
        posts={posts}
        setPosts={setPosts}
      />
    </div>
  );
};

export default Navbar;
