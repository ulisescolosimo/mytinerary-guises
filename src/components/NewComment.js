import {React, useRef, useState } from 'react'
import { useDispatch } from "react-redux";
import { useGetNewCommentMutation} from '../features/commentsAPI'
import { refresh } from '../features/refreshSlice'
import '../styles/NewComment.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Editor from './Editor';

const NewComment = ({id}) => {

    let itineraryId = id

    const dispatch = useDispatch()

    let user = JSON.parse(localStorage.getItem('userLogged'));

    const showError = (msj) => {
        toast.error(msj, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
  
    const showMsg = () => {
        toast.success(`Commentary send!`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const [newCommentary] = useGetNewCommentMutation()

    const inputRef = useRef()
    const commentRef = useRef()

    const handleComment = async(e) => {

        e.preventDefault()

        let commentary = {
            comment: value,
            itinerary: itineraryId,
            user: user.id
        }

        if(value == ""){
            showError('Please write a comment')
        }else{
            await newCommentary(commentary);
            commentRef.current.reset()
            dispatch(refresh())
            showMsg()
        }   
    }

    const [value, setValue] = useState('')

return (
    <form onSubmit={handleComment} style={{display:'flex',alignItems:'center', flexDirection:'column'}} ref={commentRef}>
        {/* <textarea style={{margin:'10px', padding:"10px"}} ref={inputRef} placeholder='Add new comment' /> */}
        <Editor setValue={setValue} value={value} />
        <button type="submit" style={{background:'green', marginTop:'20px' ,padding:'10px', borderRadius:'10px', color:'white' ,textDecoration:'none', cursor:'pointer'}}>Add new comment</button>
    </form>
)
}

export default NewComment