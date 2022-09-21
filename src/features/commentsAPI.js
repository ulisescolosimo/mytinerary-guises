import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from "../api";

export const commentsAPI =  createApi({

    reducerPath: 'commentsAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: `${apiurl}`
    }),

    endpoints: (builder) => ({
        getComments: builder.query({
            query: (id) => `/comments?itinerary=${id}`
        }),

        getNewComment: builder.mutation({
            query(comment){
                return{
                        url: '/comments/',
                        method: 'POST',
                        body: comment,
                }
            },
            invalidatesTags: ['Post'],
        }),

        modifyComment: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/comments/${id}`,
                method: 'PATCH',
                body: rest,
            })
        }),

        deleteComment: builder.mutation({
            query: (id) => ({
            url: `/comments/${id}`,
            method: 'DELETE'
            })
        })
    })
})

export default commentsAPI
export const { useGetCommentsQuery, useGetNewCommentMutation, useDeleteCommentMutation, useModifyCommentMutation} = commentsAPI