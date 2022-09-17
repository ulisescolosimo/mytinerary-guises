import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

export const itineraryAPI = createApi({

    reducerPath: "itineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),


    endpoints: (builder) => ({
        getItinerariesCity: builder.query({
            query: (id) => `itineraries/?city=${id}`
        }),
        getItinerariesUser: builder.query({
            query: (id) => `itineraries/?user=${id}`
        }),
        createItinerary: builder.mutation({
            query: (itinerary) => ({
                url: 'itineraries/',
                method: 'POST',
                body: itinerary,
            })
        }),
    })
})

export default itineraryAPI
export const { useGetItinerariesCityQuery, useGetItinerariesUserQuery, useCreateItineraryMutation } = itineraryAPI