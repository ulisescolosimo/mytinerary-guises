import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Comments.css'
import { useGetCommentsQuery, useGetNewCommentMutation, useDeleteCommentMutation, useModifyCommentMutation} from '../features/commentsAPI'
import { useSelector, useDispatch } from "react-redux";
import NewComment from './NewComment';


const DisplayComments = ({id}) => {

  let refresh = useSelector((state) => state.refresh.refreshState)
  const dispatch = useDispatch()

  const itineraryId = id /* id del itinerario */

  const { data: comments, refetch } = useGetCommentsQuery(id);

  let info = comments?.response

  let user = JSON.parse(localStorage.getItem('userLogged'));

  const logged = useSelector((state) => state.logged.loggedState)

  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const [deleted, setDeleted] = useState(false)

  const [deleteComment] = useDeleteCommentMutation()

  const deletedComment = async(id) => {
    await deleteComment(id)
    .then((success) => {
        setDeleted(!deleted)
        console.log(success);
    })
    .catch((error) => {
        console.log(error.data.message);
    });
}

  const handleEdit = () =>{
    setEdit(!edit)
    console.log(edit);
  }

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    refetch()
  }, [deleted, open, edit, refresh])

  return (
    <div className="container-comments">
        {open ? <div className="chat-container" >
                <div className="chat-msg" style={{display:'flex',alignItems:'center', flexDirection:'column', gap:'20px'}}>
                    {info.length > 0 ? (info?.map((info) => 
                    <div className="chat-p" style={{fontSize:'20px', width:'100%'}}>
                      <div style={{display:'flex',alignItems:'center', margin:'5px'}}>
                        <img style={{width:'50px', height:'50px', borderRadius:'30px', margin:'5px'}} src={info?.user?.photo} /><span>{info?.user?.name}</span></div> <div style={{textAlign:'center'}} id={info?._id}>{info?.comment}
                        {(info?.user?._id == user?.id || user?.role == 'admin') ? <div><button onClick={()=>deletedComment(info?._id)}>Eliminar</button>{info?.user?._id == user?.id ? <button onClick={handleEdit}>Editar</button> : null}</div> : null}
                      </div>
                    </div>)) : <div className="nocomments" style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', textAlign:'center'}}>No comments yet</div>}
                </div>
                {logged ? 
                  <NewComment id={itineraryId} refresh={refresh} /> : <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', marginTop:''}}>If you want to comment, please login yourself</div>}
        </div> : null}
        <button className="see-more" onClick={handleClick}>{open ? "See less" : "See more!" }</button>
    </div>
  )
}

export default DisplayComments