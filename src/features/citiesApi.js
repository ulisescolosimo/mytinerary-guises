import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const citiesApi = createApi ({
      reducerPath: "citiesApi",

      baseQuery : fetchBaseQuery({
            baseUrl : 'http://localhost:4000/'
      }),
      endpoints: (builder) => ({
            getAllCities : builder.query({
                  query: () => "cities/all/"
            }),
            getCityName: builder.query({
                  query: (city) => `cities?city=${city}`
            })
      })
})

export default citiesApi
export const { useGetAllCitiesQuery, useGetCityNameQuery } = citiesApi;
