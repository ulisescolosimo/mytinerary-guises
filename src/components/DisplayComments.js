import React from 'react'
import { useState } from 'react'
import '../styles/Comments.css'
import { useParams } from 'react-router-dom'
import { useGetCommentsQuery, useGetNewCommentMutation, useDeleteCommentMutation, useModifyCommentMutation} from '../features/commentsAPI'

const DisplayComments = ({idIti}) => {

    const {data:comments} = useGetCommentsQuery()
    
    let info = comments?.response

    console.log(info)

    /* console.log(info) */

    /* const [newComment] = useGetNewCommentMutation() */

    /* const [modifyComment] = useModifyCommentMutation()

    const [deleteComment] = useDeleteCommentMutation() */

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }


    //Crear comentario
    /* async function createComment() {
      await newComment("comment")
    } */

  return (
    <div className="container-comments">
        {open ? <div className="chat-container" >
                <div className="chat-msg">
                    {info?.map((info) => <p className="chat-p">{info?.user?.name}: {info?.comment}</p>)}
                </div>
        </div> : null}
        <button className="see-more" onClick={handleClick}>{open ? "See less" : "See more!" }</button>
    </div>
  )
}

export default DisplayComments