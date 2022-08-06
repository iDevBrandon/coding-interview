import React from "react";
import "./App.css";
import { useContactQuery, useContactsQuery } from "./services/contactsApi";

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
    </div>
  );
}

export const ContactDetail = ({ id }: { id: string }) => {
  const { data } = useContactQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default App;
