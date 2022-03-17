import React, {useState} from "react";
import { Button, Navbar as BNavbar} from "react-bootstrap";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Navbar = ({posts, setPosts}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <BNavbar bg="warning d-flex justify-content-between px-5" variant="light">
        <Link to="/">
        <h1>Blog</h1>
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
