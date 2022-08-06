import React from "react";
import "./App.css";
import {
  useAddContactMutation,
  useContactQuery,
  useContactsQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} from "./services/contactsApi";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();
  return (
    <div className="App">
      <h1>React redux RTK Query Tutorial</h1>
      {isLoading && <p>Loading...</p>}
      {isFetching && <p>Fetching...</p>}
      {error && <p>Error happened! </p>}
      {isSuccess && (
        <div>
          {data?.map((contact) => (
            <div className="data" key={contact.id}>
              <span>{contact.name}</span>
              <span>
                <ContactDetail id={contact.id} />
              </span>
            </div>
          ))}
        </div>
      )}
      <div>
        <AddContact />
      </div>
    </div>
  );
}

export const ContactDetail = ({ id }: { id: string }) => {
  const { data } = useContactQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  const contact = {
    id: "8",
    name: "asb Doe",
    email: "john@gm.com",
  };

  const updatedContact = {
    id: "8",
    name: "Roise",
    email: "roise @gm.com",
  };

  const addHandler = async () => {
    await addContact(contact);
  };

  const updateHandler = async () => {
    await updateContact(updatedContact);
  };

  const deleteHandler = async () => {
    await deleteContact(contact.id);
  };

  return (
    <div>
      <button onClick={addHandler}>Add contact</button>
      <button onClick={updateHandler}>Update contact</button>
      <button onClick={deleteHandler}>Delete contact</button>
    </div>
  );
};

export default App;
