import {React, useRef, useState } from 'react'
import { useDispatch } from "react-redux";
import { useGetNewCommentMutation} from '../features/commentsAPI'
import { refresh } from '../features/refreshSlice'
import ReactMarkdown from 'react-markdown';
import '../styles/NewComment.css'

const NewComment = ({id}) => {

    let itineraryId = id

    const dispatch = useDispatch()

    let user = JSON.parse(localStorage.getItem('userLogged'));

    const [newCommentary] = useGetNewCommentMutation()

    const inputRef = useRef()
    const commentRef = useRef()

    const handleComment = async(e) => {

        e.preventDefault()

        let commentary = {
            comment: inputRef.current.value,
            itinerary: itineraryId,
            user: user.id
        }

        console.log(commentary);
        await newCommentary(commentary);
        commentRef.current.reset()
        dispatch(refresh())
    }


return (
    /* <form className="input-comments" onSubmit={handleComment} style={{display:'flex',alignItems:'center'}} ref={commentRef}>
        <input ref={inputRef} />
        <button type="submit">Enviar</button>
    </form> */
    <form className="input-comments" onSubmit={handleComment} style={{display:'flex',alignItems:'center'}} ref={commentRef}>
        <input ref={inputRef} />
        <button type="submit">Enviar</button>
    </form>
)
}

export default NewComment