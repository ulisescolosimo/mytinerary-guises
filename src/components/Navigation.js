import React from 'react'
import BurgerButton from './BurgerButton'
import { Link, useNavigate } from 'react-router-dom'
import { useGetSignOutMutation, useGetAllUsersQuery} from '../features/usersAPI'

const Navigation = (props) => {

  const pages = props.pages
  const open = props.open

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  const [signOut] = useGetSignOutMutation()

  let user = JSON.parse(localStorage.getItem('userLogged'))

  const handleLogOut = async() => {
    let object = {
        logged: false,
        id: user[0]._id,
    }
    await signOut(object)
    localStorage.removeItem('userLogged')
    window.location.reload()
  }

  const { data : users } = useGetAllUsersQuery()
  let usersResponse = users?.response
  let userLogged = usersResponse?.filter(user => user.logged)
    if(userLogged?.length > 0) {
      localStorage.setItem('userLogged', JSON.stringify(userLogged))
    }

  return (
    <nav class="navigation-menu">
        <div className="navbar-container">
            <img className="nav-bar-logo" src="/logo-header.jpg" style={{height: '90%'}}/>
            <ul className="list">
                {pages.map(props.link)}
                <button className="btn-navigation" onClick = {props.click}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></button>
            </ul>
            <BurgerButton onClick = {props.clicked} />
        </div>
        <div className='profile-Select'>
            { open ?
                <div style={{height: '100%', width: '120px'}}>
                    {user?.length > 0 ? 
                    <> 
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <p>{user[0].name}</p><img style={{height: '50px', width: '50px'}} src={user[0].photo} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <button type="button" onClick={handleLogOut} style={{backgroundColor: 'black', borderRadius: '10px', margin: '10px' ,padding: '5px', color: 'white', cursor: 'pointer'}}>Log out</button>
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
    </nav> 
  )
}

export default Navigation
