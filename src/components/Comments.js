import React, {useState, useRef} from 'react'
import {useModifyCommentMutation} from '../features/commentsAPI'
import { useDispatch } from "react-redux";
import { refresh } from '../features/refreshSlice'
import '../styles/Comments.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parse from 'html-react-parser'

const Comments = ({info, deletedComment, user}) => {

  const dispatch = useDispatch()

  const showEditComment = (msj) => {
    toast.success(msj, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
  };


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
          dispatch(refresh())
          showEditComment("Your comment was edited")
          setEdit(!edit)
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div style={{display:'flex', justifyContent:'space-around' ,alignItems:"center" ,border:'2px solid white', borderRadius:'10px', width:'90%', flexWrap:'wrap'}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:"center", margin:'20px'}}>
            <img src={info?.user?.photo} style={{width:'100px', height:'100px', borderRadius:'60px'}} /><span>{info?.user?.name}</span></div>
            <div id={info?._id} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:"center", height:'100%', margin:'20px'}}>
              {edit ? <form ><input style={{padding:'10px'}} placeholder={info?.comment} ref={editedRef} />
              </form> 
              :
              <div style={{padding:'30px'}}>{parse(`${info?.comment}`)}</div>}
            {(info?.user?._id == user?.id || user?.role == 'admin')
            ? 
            <div style={{display:'flex', justifyContent:'center', width:'100%', margin:'20px'}}>
              <button style={{background:'red', padding:'10px', borderRadius:'10px' , color:'white' ,textDecoration:'none', cursor:'pointer'}} onClick={()=>deletedComment(info?._id)}>
                Remove
              </button>
            {info?.user?._id == user?.id
            ?
            <button style={{background:'black', padding:'10px', borderRadius:'10px',border:"1px solid white" , color:'white' ,textDecoration:'none', cursor:'pointer'}} onClick={handleEdit}>
              {edit
              ?
              'Back': 'Edit'}
              </button>
              : null}
            {edit ?
            <button style={{background:'green', padding:'10px', border:"1px solid white" ,borderRadius:'10px', color:'white' ,textDecoration:'none', cursor:'pointer'}} onClick={()=>editedComment(info?._id)}>
              Confirm edit
            </button>
          : null }
          </div> : null}
        </div>
    </div>
  )
}

export default Comments