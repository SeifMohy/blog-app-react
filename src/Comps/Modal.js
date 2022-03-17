import React from "react";
import { Button, Modal as BModal, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";


const Modal = ({ handleClose, show, posts, setPosts }) => {
  const userSchema = yup.object({
    title: yup.string().required("Required"),
    author: yup.string().required("Required"),
    post: yup.string().max(240),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      post: "",
    },
    onSubmit: (values) => {
      const id = Math.round(Math.random() * 100000);
      setPosts([...posts, { ...values, id }]);
      handleClose();
      formik.resetForm();
    },
    validationSchema: userSchema,
  });

  return (
    <div>
      <BModal show={show} onHide={handleClose}>
        <Form className="bg-light">
          <Form.Group className="m-3">
            <BModal.Header className="" closeButton>
              <BModal.Title>Blog Post</BModal.Title>
            </BModal.Header>
            <Form.Label className="mt-2">Title</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              type="text"
              name="title"
              placeholder=""
            />{formik.errors.title && formik.touched.title ? (<div className="text-danger">{formik.errors.title}</div>) : null}

            <Form.Label>Author</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.author}
              onBlur={formik.handleBlur}
              type="text"
              name="author"
              placeholder=""
            />{formik.errors.author && formik.touched.author ? (<div className="text-danger">{formik.errors.author}</div>) : null}

            <Form.Label>Post</Form.Label>
            <Form.Control
              className=""
              style={{ height: "100px", padding: "2" }}
              onChange={formik.handleChange}
              value={formik.values.post}
              type="text"
              name="post"
            /> 

            <BModal.Footer className="">
              <Button
                variant="secondary"
                type="submit"
                onClick={formik.handleSubmit}
              >
                Post!
              </Button>
            </BModal.Footer>
          </Form.Group>
        </Form>
      </BModal>
    </div>
  );
};

export default Modal;
