import React from 'react'
import { useState } from 'react'
import '../styles/Comments.css'
import { useGetCommentsQuery, useGetNewCommentMutation, useDeleteCommentMutation, useModifyCommentMutation} from '../features/commentsAPI'
import { useDispatch, useSelector } from "react-redux";
import { loggedTrue } from "../features/loggedSlice";


const DisplayComments = ({id}) => {

  console.log(id);

  const { data: comments, isSuccess } = useGetCommentsQuery(id);

  let user = JSON.parse(localStorage.getItem('userLogged'));
  console.log(user);

  let commentsItinerary = comments?.response;
    
  let info = comments?.response

  console.log("Info", info);

  console.log(commentsItinerary);

  const logged = useSelector((state) => state.logged.loggedState)

    /* const [newComment] = useGetNewCommentMutation() */

    /* const [modifyComment] = useModifyCommentMutation()

    const [deleteComment] = useDeleteCommentMutation() */

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className="container-comments">
        {open ? <div className="chat-container" >
                <div className="chat-msg" style={{display:'flex',alignItems:'center', flexDirection:'column', gap:'20px'}}>
                    {info.length > 0 ? (info?.map((info) => 
                    <div className="chat-p" style={{fontSize:'20px', width:'100%'}}>
                      <div style={{display:'flex',alignItems:'center', margin:'5px'}}>
                        <img style={{width:'50px', height:'50px', borderRadius:'30px', margin:'5px'}} src={info?.user?.photo} />
                        <span>{info?.user?.name}</span></div> <div style={{textAlign:'center'}}>{info?.comment}
                        {(info?.user?._id == user?.id || user?.role == 'admin') ? <div><button>Eliminar</button>{info?.user?._id == user?.id ? <button>Editar</button> : null}</div> : null}
                      </div>
                    </div>)) : <div className="nocomments" style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', textAlign:'center'}}>No comments yet</div>}
                </div>
                {logged ? <div className="input-comments" style={{display:'flex',alignItems:'center'}}>
                  <input type="text" className="comments-input" />
                  <button>Enviar</button>
                </div> : <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', marginTop:''}}>If you want to comment, please login yourself</div>}
        </div> : null}
        <button className="see-more" onClick={handleClick}>{open ? "See less" : "See more!" }</button>
    </div>
  )
}

export default DisplayComments