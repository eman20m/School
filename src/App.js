import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { singout } from './store/actions/userActions';


function App(props) {
  const userSignin = useSelector((state) => state.userSignin);
  console.log(userSignin);
  const dispatch=useDispatch()
    
  const submitOut=()=>{
    dispatch(singout())
  }
 
  return (
    <>
    <div>
      <Router>
        <Navbar sticky="top" className="row navbar navbar-expand-sm navbar-fixed-top navbar-light py-3 bg-light">
          <div className="container">
            <div className="col-10">
              <Link className="navbar-brand font-weight-bold" to="/">
                <h2>School</h2>
              </Link>

            </div>
          
            <div className="col-2">
              {
                userSignin?.userInfo ? (
                  <>
                  <Link>{userSignin?.userInfo?.name?.toUpperCase()}</Link>
                  <Link className="navbar-item m-3 " onClick={submitOut} to="/login">Logout</Link>
                  </>
                )
                : (
                  <Link className="navbar-item m-3 " to="/login">Login</Link>
                )
              }
              
            </div>
                
          </div>
          
        
        </Navbar>
        <Routes />
      </Router>
      
    </div>
    
  </>
  );
}

export default App;