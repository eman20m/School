import "./login.css"
import React, { useState,useEffect } from 'react';
import data from '../../data'
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../store/actions/userActions";

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //redirect user to home
  const redirect = props.location.search
  ? props.location.search.split('=')[1] : '/';
  const dispatch=useDispatch();
  console.log(data);

  const userSignin = useSelector((state) => state.userSignin);
  console.log(userSignin);
  
  useEffect(() => {
    if (userSignin?.userInfo) {
      props.history.push(redirect);
    }
  },[props.history,redirect ,userSignin.userInfo]);

  var submitHandler=(e)=>{
    e.preventDefault();
    data.users.map(user =>{
      if(email===user.email ){
        console.log('hello');
        if (password===user.password){
          console.log('hello2');
          dispatch(signin(user))
          props.history.push(redirect);
        }
        else alert('password does not match')
      }
    })
      
  }
  
  return (
    <>
      <div className="container bodyLogin">
        <div className="row">

          <div className="login bg-white ">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
            
            <div className="form-group">
                <label for="email"></label>
                <input dir="auto" style={{textAlign: 'start'}}  className="form-control" type="email" id="email" name="email" dir="auto" style={{textAlign: 'start'}} placeholder={"Enter Email"}
                  onChange={(e) => setEmail(e.target.value)} />
            </div>
              <div className="form-group mb-5">
                <input className="form-control" type="password" id="pwd" placeholder={"Enter your password"}
                  onChange={(e) => setPassword(e.target.value)} />

              </div>
              <div className="form-group form-check mb-5">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />Remember me
                </label>
              </div>
              <button className="btn btn-primary w-100" type="submit">Login</button>
              
            </form>
            <p><a href="/signup"> Forgot your password ?</a></p>
          </div>
        </div>
      </div>

    </>

  );
};
export default Login;
