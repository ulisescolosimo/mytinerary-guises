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
        })

    })
})

export default myTineraryAPI
export const { useGetItinerariesUserQuery } = myTineraryAPI