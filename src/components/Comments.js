import React, {useState, useRef} from 'react'
import {useModifyCommentMutation} from '../features/commentsAPI'
import { useDispatch } from "react-redux";
import { refresh } from '../features/refreshSlice'

const Comments = ({info, deletedComment, user}) => {

  const dispatch = useDispatch()

  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
    setEdit(!edit)
  }

  const editedRef = useRef()

  let [editComment] = useModifyCommentMutation()

  const editedComment = async (id) => {
      const editedComment =
      {
          comment: editedRef.current.value,
          id: id
      };
      await editComment(editedComment)
      .then((success) => {
          console.log(success);
          dispatch(refresh())
          setEdit(!edit)
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className="chat-p" style={{fontSize:'20px', width:'100%'}}>
            <div style={{display:'flex',alignItems:'center', margin:'5px'}}>
            <img style={{width:'50px', height:'50px', borderRadius:'30px', margin:'5px'}} src={info?.user?.photo} /><span>{info?.user?.name}</span></div> <div style={{textAlign:'center'}} id={info?._id}>{edit ? <form><input placeholder={info?.comment} ref={editedRef} /></form> : (info?.comment)}
            {(info?.user?._id == user?.id || user?.role == 'admin') ? <div style={{padding:'10px', display:'flex', gap:'8px', alignItems:'center', justifyContent:'center'}}><button onClick={()=>deletedComment(info?._id)}>Remove</button>{info?.user?._id == user?.id ? <button onClick={handleEdit}>{edit ? 'Back' : 'Edit'}</button> : null}{edit ? <button onClick={()=>editedComment(info?._id)}>Confirm edit</button> : null }</div> : null}
        </div>
    </div>
  )
}

export default Comments