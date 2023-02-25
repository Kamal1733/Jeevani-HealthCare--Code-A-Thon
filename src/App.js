import React from 'react'
import SigninBody  from './SignInBody'
import  Header from './Header'
import About from'./About'
 import  Footer from './Footer'
 import Todo from './Toodo/Todo'
 import Home from './Home'
 import Service from './Service'
import Bmi from './Bmi'
 import {Routes,Route}  from 'react-router-dom'
const App = () => {
  return (
    <div>
         <Header/>
         <Routes>
         <Route  exact   path="/"  element={<Home/>}  />
          <Route  exact path="/about"  element={<About/>}  />
          <Route  exact path="/signin"  element={<SigninBody/>}  />
          <Route path="/bmi"  element={<Bmi/>}  />
          <Route path="/workoutplan"  element={<Todo/>}  />
          <Route path="/service"  element={<Service/>}  />

         </Routes>
         <Footer/>
 
 
      
    </div>
  )
}
 
export default App