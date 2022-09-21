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
        likeOrDislike: builder.mutation({
            query: (id) => ({
                url: '/itineraries/like/'+id,
                method: 'PATCH',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        getDetails: builder.mutation({
            query: (id) => ({
                url: '/details/'+id,
                method: 'GET'
            })
        }),
        getItis: builder.mutation({
            query: (id) => ({
                url: `itineraries/?city=${id}`,
                method: 'GET'
            })
        }),
    })
})

export default itineraryAPI
export const { useGetItinerariesCityQuery ,useGetItinerariesUserQuery, useCreateItineraryMutation, useLikeOrDislikeMutation, useGetDetailsMutation, useGetItisMutation } = itineraryAPI