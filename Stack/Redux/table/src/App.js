import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [contacts, setContacts] = useState(data);
  // initialize the form data(Object)
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phoneNumber: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  // handle form change
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name"); // get the field name each input
    const fieldValue = event.target.value; // get the field value from each input

    const newFormData = { ...addFormData }; // copy the exiting data
    newFormData[fieldName] = fieldValue; // now we can get whatever typed in that specific input

    setAddFormData(newFormData); // update the state
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  // when the form is submitted
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact]; // add the new contact to the contacts array
    setContacts(newContacts); // update the state
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          placeholder="Enter a Full Name..."
          name="fullName"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          placeholder="Enter an address..."
          name="address"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          placeholder="Enter an email..."
          name="email"
          required="required"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
