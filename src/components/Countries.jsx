import { useState } from "react";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { deleteCountry } from "../features/countriesSlice";

const Countries = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const dispatch = useDispatch();
  const countriesState = useSelector((state) => {
    return state.country.countries;
  });

  const handleEdit = (data) => {
    setShowModal(true);
    setSelectedCountry(data);
  };

  const handleDelete = (data) => {
    dispatch(deleteCountry(data));
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {countriesState?.map((data, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.code}</td>
                  <td>{data.description}</td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleEdit(data.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <ModalAdd />
      <ModalEdit
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        selectedCountry={selectedCountry}
      />
    </>
  );
};

export default Countries;
