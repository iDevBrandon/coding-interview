import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(data);
  // initialize the form data(Object)
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

  // handle form change
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name"); // get the field name each input
    const fieldValue = event.target.value; // get the field value from each input

    const newFormData = { ...addFormData }; // copy the exiting data
    newFormData[fieldName] = fieldValue; // now we can get whatever typed in that specific input

    setAddFormData(newFormData); // update the state
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

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
