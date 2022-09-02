import { createSlice } from '@reduxjs/toolkit'

export const citiesSlides = createSlice({

    name: 'cities',
    initialState: {
        cities : []
    },

    reducers: {
        getData : (state) => {
            state.cities = [
                    {
                        city: "La matanza",
                        country: "Arg",
                        photo: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        population: 2161000,
                        foundation: "1951-10-04",
                        description: "Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city."
                    }
            ]
        }
    }
})

export const { getData } = citiesSlides.actions

export default citiesSlides.reducer


