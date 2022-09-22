import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

export const myTineraryAPI = createApi({

    reducerPath: "tineraryAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),


    endpoints: (builder) => ({
        getItinerariesUser: builder.query({
            query: (id) => `itineraries/?user=${id}`
        }),

        updateItineraryUser: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/itineraries/${id}`,
                method: 'PATCH',
                body: rest,
                }),
        }),

        deleteItineraryUser: builder.mutation({
            query: (id) => ({
                url:  `/itineraries/${id}`,
                method: 'DELETE',
                /* headers: {Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))} */
            })
        }),

    })
})

export default myTineraryAPI
export const { useGetItinerariesUserQuery, useDeleteItineraryUserMutation, useUpdateItineraryUserMutation } = myTineraryAPI