import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

function Navbar() {
    const {user, logout} = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout();
        navigate('/login')
    };
  return (
    <nav style={styles.nav}>
        <h2>Task master</h2>
            <div style={styles.links}>
                {!user ? (<Link to = "/login" style={styles.link}>Login</Link>) : (
                    <>
                        <Link to='/dashboard' style={styles.link}></Link>
                        <span style={styles.user}>Hello {user.name}</span>
                        <button onClick={handleLogout} style={styles.button}>Log out</button>
                    </>
                )}
            </div>    
    </nav>
  );
}

const styles = {
    nav:{display : 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', color:'#fff'},
    links:{display: 'flex', gap: '15px', alignItems: 'center'},
    link:{color: '#fff', textDecoration: 'none'},
    user:{fontStyle: 'italic', fontSize: '0.9rem'},
    button:{cursor: 'pointer', paddin: '5px 10px'}
}

export default Navbar