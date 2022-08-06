import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../models/contact.model";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => "/contacts",
    }),

    // fetch a single contact
    contact: builder.query<Contact, string>({
      query: (id) => `/contacts/${id}`,
    }),

    // create a new contact
    addContact: builder.mutation<void, Contact>({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
    }),

    // update an existing contact
    updateContact: builder.mutation<void, Contact>({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),

    // delete an existing contact
    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
