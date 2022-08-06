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
  }),
});

export const { useContactsQuery, useContactQuery } = contactsApi;
