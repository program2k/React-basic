import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addCountry } from "../features/countriesSlice";

const ModalAdd = () => {
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      code: Yup.string().required("Code is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(addCountry(values));
      resetForm();
      handleCloseAdd();
    },
  });

  return (
    <>
      <Button variant="primary" onClick={handleShowAdd}>
        Add
      </Button>

      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add new</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter Name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="code"
              name="code"
              placeholder="Enter Code"
              value={formik.values.code}
              onChange={formik.handleChange}
            />
            {formik.errors.code && (
              <div className="error">{formik.errors.code}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              name="description"
              placeholder="Enter Description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            {formik.errors.description && (
              <div className="error">{formik.errors.description}</div>
            )}
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={formik.handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAdd;
