import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'constants/apiBaseUrl';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation } = contactsApi;
