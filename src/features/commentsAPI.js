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
            query: (newComment) => ({
                url: '/comments',
                method: 'POST',
                body: newComment,
                headers: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
                }
            })
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
                url:  `/comments/${id}`,
                method: 'DELETE',
                headers: {Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))}
            })
        }),
        
        editComment: builder.mutation({
            query: (body) => ({
                url:  `/comments/${body.id}`,
                method: 'PATCH',
                body: body,
                headers: {Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))}
            }),
        }),
    })
})

export default commentsAPI
export const { useGetCommentsQuery, useGetNewCommentMutation, useDeleteCommentMutation, useModifyCommentMutation} = commentsAPI