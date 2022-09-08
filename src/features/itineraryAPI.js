import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itineraryAPI = createApi({

    reducerPath: "itineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000'
    }),


    endpoints: (builder) => ({
        getItinerariesCity: builder.query({
            query: (id) => `itineraries/?city=${id}`
        }),
        getItinerariesUser: builder.query({
            query: (id) => `itineraries/?user=${id}`
        }),
    })
})

export default itineraryAPI
export const { useGetItinerariesCityQuery, useGetItinerariesUserQuery } = itineraryAPI