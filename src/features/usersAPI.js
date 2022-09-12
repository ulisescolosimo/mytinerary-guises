import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

export const usersAPI = createApi({

    reducerPath: "tineraryAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),


    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: ({...rest}) => ({
            url: `/signup/`,
            method: 'POST',
            body: rest,
        }),
    })
    })
})

export default usersAPI
export const { useCreateUserMutator } = usersAPI