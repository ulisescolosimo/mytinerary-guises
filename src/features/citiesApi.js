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
            }),
            getNewCity: builder.mutation({
                  query(cities){
                        return{
                              url: '/cities/',
                              method: 'POST',
                              body: cities,
                        }
                  },
                  invalidatesTags: ['Post'],
            }),
            updateCity: builder.mutation({
                  query: ({id, ...rest}) => ({
                  url: `/cities/${id}`,
                  method: 'PATCH',
                  body: rest,
                  })
      })
})

})

export default citiesApi
export const { useGetAllCitiesQuery, useGetNewCityMutation, useGetCityNameQuery, useUpdateCityMutation } = citiesApi;
