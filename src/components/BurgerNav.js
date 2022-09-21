import {React, useState, useEffect} from 'react'
import '../styles/BurgerNav.css'
import BurgerButton from './BurgerButton'
import {Link , useNavigate} from 'react-router-dom'
import { useGetSignOutMutation, useGetAllUsersQuery} from '../features/usersAPI'
import Alerts from './Alerts'
import { useDispatch } from 'react-redux';
import { entry } from '../features/loggedSlice'

const BurgerNav = (props) => {

  
  const open = props.open
  const pages = props.pages
  const pagesUser = props.pagesUser
  const pagesAdmin = props.pagesAdmin

  const dispatch = useDispatch()
  
  const navigate = useNavigate()
  
  const [signOut] = useGetSignOutMutation()
  const [error, setError] = useState()
  
  const handleNavigate = () => {
    navigate('/')
  }
  
  let user = JSON.parse(localStorage.getItem('userLogged'))
  
  const handleLogOut = async() => {
    try{
      let object = {
        logged: false,
        id: user.id,
      }
    await signOut(object)
    localStorage.removeItem('userLogged');
    setError("Sign out successfully")
    dispatch(entry())
    handleNavigate();
    }catch(error){
      console.log(error);
    }
  }


  const link = (page) => <div className="footer-nav"><Link className="items-link" to={page.to}>{page.name}</Link></div>

  return (
    <nav className="HamburguerMenu-nav">
      <div className="HamburguerMenu">
      <div className="navbar-container-burger">
            <img className="nav-bar-logo" src="../../public/logo-header.jpg" style={{height: '100%'}}/>
            <BurgerButton handleBurger = {props.handleBurger} />
      </div>
      </div>
      <Alerts error={error} />
            {props.clicked ? <div className='Hamburguer-logs'>
            {
                  user? <>
                  { user?.role == 'admin' ?
                  pagesAdmin.map(link) :
                  pagesUser.map(link) } </> :
                  pages.map(link)
                
                }
                      <div class="container-log">
                          <button className="btn-navigation" onClick = {props.click}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></button>
<div className='container-log-2'>
{ open ?
                <div style={{height: '100%', width: '120px' }}>
                    {user?
                    <> 
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <label style={{color: 'white'}}>{user?.name}</label>
                        <img style={{height: '50px', width: '50px', margin: '5px'}} src={user?.photo} />
                        <button type="button" style={{margin: '5px', backgroundColor: 'white', padding: '5px', borderRadius: '5px'}} onClick={handleLogOut}>Log out</button>
                    </div>
                    </> : 
                    <div style={{height: '70px', width: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div><Link to='/auth/signin'>Sign in</Link></div>
                        <div><Link to='/auth/signup'>Sign Up</Link></div>
                    </div>}
                </div>
                : null
            }
        </div>
                      </div>
                      </div>
                    : null
                    }   
            </nav>
  )
}

export default BurgerNav