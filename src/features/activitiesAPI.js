import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

export const activityAPI = createApi({

    reducerPath: "activityAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),


    endpoints: (builder) => ({
        getActivities: builder.query({
            query: (itineraryID) => `/activities/?itinerary=${itineraryID}`
        })
    })
})

export default activityAPI
export const { useGetActivitiesQuery} = activityAPI