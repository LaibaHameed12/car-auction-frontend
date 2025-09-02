import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}` }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `users/${id}`,
        }),
        updateUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),
    }),
})

export const { useGetUserQuery, useUpdateUserMutation } = usersApi
