import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from "../api";

export const commentsAPI =  createApi({

    reducerPath: 'commentsAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: `${apiurl}`
    }),

    endpoints: (builder) => ({
        getComments: builder.mutation({
            query: (id) => ({
                url:  `/comments?itinerary=${id}`,
                method: 'GET',
            }),
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
            query: ({id, ...comment}) => ({
                url: `/comments/${id}`,
                method: 'PATCH',
                body: comment,
                headers: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
                }
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
export const { useGetCommentsMutation, useGetNewCommentMutation, useDeleteCommentMutation, useModifyCommentMutation} = commentsAPI