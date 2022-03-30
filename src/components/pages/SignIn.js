import React from 'react'
import './signin.css'
import logo from '../../Assets/logo/sbc.png'

const SignIn = () => {
  return (
    <div class="signupSection">
      <div class="info">
        <h2>IEEE SJCE SBC</h2>
        <i class="icon" aria-hidden="true">
          <img src={logo} alt="" />
        </i>
        <p>*Only for society webmasters*</p>
      </div>
      <form action="#" method="POST" class="signupForm" name="signupform">
        <h2>Sign In</h2>
        <ul class="noBullet">
          <li>
            <label for="username"></label>
            <input type="email" class="inputFields" id="username" name="username" placeholder="Username" />
          </li>
          <li>
            <label for="password"></label>
            <input type="password" class="inputFields" id="password" name="password" placeholder="Password" />
          </li>
          <li id="center-btn">
            <input type="submit" id="join-btn" name="join" alt="Login" value="Login" />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default SignIn