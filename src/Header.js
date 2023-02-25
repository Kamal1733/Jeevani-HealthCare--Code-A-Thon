import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      
      <ul className='uu'>
        <li>
          <img src='https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...WCrhRGnh3FwXs1M3EMoAJtlicqhfJo...f89' style={{
            height: "60px",
            width: "100px",
            
            
          }} />
        </li>
        <li>
        <Link className='text-link' to="/"> Home</Link>
        </li>
        <li>
        <Link className='text-link' to="/service"> Service</Link>
        </li>
        <li>
        <Link className='text-link' to="/workoutplan">Workout </Link>
        </li>
        <li>
        <Link className='text-link' to="/bmi"> BMI </Link>
        </li>
        <li>
        <Link className='text-link' to="/about"> About</Link>
        </li>
        <li>
        <Link className='text-link' to="/signin"> LogIn/SignUp</Link>
        </li>
        

     </ul>
   
   
    </div>
  )
}

export default Header