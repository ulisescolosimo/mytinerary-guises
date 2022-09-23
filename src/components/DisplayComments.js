import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Comments.css'
import { useGetCommentsMutation, useGetNewCommentMutation, useDeleteCommentMutation, useModifyCommentMutation} from '../features/commentsAPI'
import { useSelector, useDispatch } from "react-redux";
import { refresh } from '../features/refreshSlice'
import NewComment from './NewComment';
import Comments from './Comments';


const DisplayComments = ({id}) => {

  const refreshed = useSelector((state) => state.refresh.refreshState)
  const logged = useSelector((state) => state.logged.loggedState)
  const dispatch = useDispatch()

  const itineraryId = id /* id del itinerario */

  const [info, setInfo] = useState()

  const [getData] = useGetCommentsMutation();

  async function allComments(){
    try{
        let res = await getData(itineraryId)
        setInfo(res.data?.response)
    }catch(error){
        console.log(error)
    }
}

  let user = JSON.parse(localStorage.getItem('userLogged'));


  const [open, setOpen] = useState(false)
  const [deleted, setDeleted] = useState(false)

  const [deleteComment] = useDeleteCommentMutation()

  const deletedComment = async(id) => {
    await deleteComment(id)
      .then((success) => {
        setDeleted(!deleted)
        dispatch(refresh())
      })
      .catch((error) => {
        console.log(error);
      });
}

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(()=>{
    allComments()
},[refreshed])

  return (
    <div className="container-comments" style={{display:'flex', backgroundImage:'linear-gradient(to right top, #000000, #1f1f1f, #393939, #545454, #717171)' }}>
        {open ? <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <div style={{display:'flex', color:'white' ,padding:'20px',justifyContent:'space-evenly', gap:'20px' ,alignItems:'center', flexWrap:'wrap'}}>
                    {info?.length > 0 ? (info?.map((info) => <Comments info={info} deletedComment={deletedComment} user={user} />)) : <div className="nocomments" style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', textAlign:'center'}}>No comments yet</div>}
                </div>
                {logged ? 
                  <NewComment id={itineraryId} /> : <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%'}}>If you want to comment, please login yourself</div>}
        </div> : null}
        <div style={{display:'flex', justifyContent:"center",alignItems:'center', padding:"20px", width:'200px'}}>
          <button className="see-more" onClick={handleClick}>{open ? "See less" : "See comments!" }</button>
        </div>
    </div>
  )
}

export default DisplayComments