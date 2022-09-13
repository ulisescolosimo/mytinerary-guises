import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

export const usersAPI = createApi({

    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),

    endpoints: (builder) => ({
        
    getNewUser: builder.mutation({
            query(user){
                return{
                    url: '/auth/signup',
                    method: 'POST',
                    body: user,
                }}
    }),
    getLogin: builder.mutation({
        query(user){
            return{
                url: '/auth/signin',
                method: 'POST',
                body: user,
            }},
    }),
    getAllUsers: builder.query({
        query: () => "/auth/"
    }),
    getSignOut: builder.mutation({
        query: ({id, ...rest}) => ({
        url: `/auth/${id}`,
        method: 'PATCH',
        body: rest,
        })
    }),
})
})

export default usersAPI
export const { useGetNewUserMutation, useGetLoginMutation, useGetAllUsersQuery, useGetSignOutMutation } = usersAPI
