import React, { useEffect } from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import store from '../../redux/store';
import { saveState } from '../../redux/localStorage';
import {login,addToCart,updateLastView} from '../../redux/actions';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';


store.subscribe(() => {
    saveState({
      user: store.getState().user.user,
      cart: store.getState().cart.cart,
      totQty: store.getState().cart.totQty,
      item: store.getState().item.item,
    });
  });

const LoginForm = (props) => {
    const navigate = useNavigate();
    const [userType, setUserType] = React.useState('');
    const [users, setUsers] = React.useState([]);
  
    useEffect(() => {
        setUserType("ExistingUser");
      fetch(`http://localhost:3002/api/getUsersWithTransaction`)
      .then(response => response.json())
            .then(data =>  {
              setUsers(data)});
      }, []);
  
      const handleChange = (event) => {
            setUsers(event.target.value);
      }

    const loginUser = (event) => {
      let loggedInUser = event.target.value;
      props.login(loggedInUser);
      signUpUser(loggedInUser);
      navigate(`/items`);
    };
  
    const signUpUser = (user) => {
      if (user.USED === 'N') {
        fetch(`http://localhost:3002/api/signupUser/${user.USER_ID}`)
        .then(response => response.json())
        .then(data =>  {
          console.log(data)});
      }
    }
    

  return (
    <>
    <h2> Login For Existing User</h2>
            {/* <UserSelector/> */}
            <FormControl sx={{ m: 1, minWidth: 300 }}>
       
                <InputLabel id="demo-simple-select-helper-label">
                {/* Select User Type */}
                Existing User
              </InputLabel>
            </FormControl>

            <div class="login__field">
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                  <InputLabel id="user">Select User</InputLabel>
                  <Select
                    labelId="user"
                    id="user"
                    label="Selected User"
                    // onChange={loginUser}
                    value={users}
                    onChange={handleChange}
                  >
                    {users.map((user, index) => (
                      <MenuItem value={user} key={user.USER_ID}>
                        {user.USER_ID} {user.AGE} {user.GENDER}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

            <div>
            <Button variant="contained" onClick={loginUser}>LOGIN</Button>
            </div>
    </>
  )
}

// export default LoginForm

const mapDispatchToProps = dispatch => {
    return {
      login: (user) => dispatch(login(user))
    }
  }
  
  export default connect(null,mapDispatchToProps) (LoginForm);