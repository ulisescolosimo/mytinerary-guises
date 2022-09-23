import {React, useRef, useState } from 'react'
import { useDispatch } from "react-redux";
import { useGetNewCommentMutation} from '../features/commentsAPI'
import { refresh } from '../features/refreshSlice'
import '../styles/NewComment.css'
import Alerts from './Alerts'

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

        await newCommentary(commentary);
        commentRef.current.reset()
        dispatch(refresh())
    }


return (
    <form onSubmit={handleComment} style={{display:'flex',alignItems:'center', flexDirection:'column'}} ref={commentRef}>
        <textarea style={{margin:'10px', padding:"10px"}} ref={inputRef} />
        <button type="submit" style={{background:'green', padding:'10px', borderRadius:'10px', color:'white' ,textDecoration:'none', cursor:'pointer'}}>Add new comment</button>
    </form>
)
}

export default NewComment