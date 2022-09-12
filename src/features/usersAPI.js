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
                }
        },
    })
    })
})

export default usersAPI
export const { useGetNewUserMutation } = usersAPI