import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const myTineraryAPI = createApi({

    reducerPath: "tineraryAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000'
    }),


    endpoints: (builder) => ({
        getItinerariesUser: builder.query({
            query: (id) => `itineraries/?user=${id}`
        })

    })
})

export default myTineraryAPI
export const { useGetItinerariesUserQuery } = myTineraryAPI