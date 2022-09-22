import {React, useRef, useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useGetCommentsQuery, useGetNewCommentMutation, useDeleteCommentMutation, useModifyCommentMutation} from '../features/commentsAPI'

const NewComment = ({id, refresh}) => {

    let itineraryId = id
    const dispatch = useDispatch()

    let user = JSON.parse(localStorage.getItem('userLogged'));

    const inputRef = useRef()
    const commentRef = useRef()

    console.log(refresh);

    const [newCommentary] = useGetNewCommentMutation()

    const newComment = async(commentary) => {
        await newCommentary(commentary)
        .then((success) => {
            commentRef.current.reset()
            console.log(success);
            console.log(dispatch(refresh())); 
            console.log(refresh);
        })
        .catch((error) => {
            console.log(error?.data);
        });
    }

    const handleComment = async(e) => {

        e.preventDefault()

        let commentary = {
            comment: inputRef.current.value,
            itinerary: itineraryId,
            user: user.id
        }
        await newComment(commentary);
    }

return (
    <form className="input-comments" onSubmit={handleComment} style={{display:'flex',alignItems:'center'}} ref={commentRef}>
        <input ref={inputRef} />
        <button type="submit">Enviar</button>
    </form>
)
}

export default NewComment