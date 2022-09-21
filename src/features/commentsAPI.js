import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from "../api";

export const commentsAPI =  createApi({

    reducerPath: 'commentsAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: `${apiurl}`
    }),

    endpoints: (builder) => ({
        getComments: builder.query({
            query: (id) => `/comments?itinerary=${id}`
        }),
    })
    
})
export default commentsAPI
export const { useGetCommentsQuery } = commentsAPI