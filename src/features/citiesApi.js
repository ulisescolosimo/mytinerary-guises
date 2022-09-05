import { createApi, fetchBaseQuery } from 'reduxjs/toolkit/query/react'

const citiesApi = createApi ({
      reducerPath: "myTineraryApi",
      baseQuery : fetchBaseQuery({
            baseUrl : 'http://localhost:4000/'
      }),

      endpoints: (builder) => ({
            getAllCities : builder.query({
                  query: () => "/cities/all"
            }),
      }),
})

export default citiesApi
export const { useGetAllCitiesQuery } = citiesApi

