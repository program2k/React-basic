import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { editCountry } from "../features/countriesSlice";

const ModalEdit = ({ showModal, closeModal, selectedCountry }) => {
  const dispatch = useDispatch();
  const editCountryState = useSelector((state) => {
    return state.country.countries.find((x) => x.id === selectedCountry);
  });

  const formik = useFormik({
    initialValues: {
      id: editCountryState ? editCountryState.id : "",
      name: editCountryState ? editCountryState.name : "",
      code: editCountryState ? editCountryState.code : "",
      description: editCountryState ? editCountryState.description : "",
    },
    validationSchema: Yup.object({
      id: Yup.string().required("Id is required"),
      name: Yup.string().required("Name is required"),
      code: Yup.string().required("Code is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(editCountry(values));
      resetForm();
      closeModal();
    },
  });
  return (
    <>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit country</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>id</Form.Label>
            <Form.Control
              type="number"
              name="id"
              placeholder="Enter id"
              value={formik.values.id}
              onChange={formik.handleChange}
            />
            {formik.errors.id && (
              <div className="error">{formik.errors.id}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
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
              type="text"
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
              type="text"
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
          <Button variant="secondary" onClick={closeModal}>
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

export default ModalEdit;
