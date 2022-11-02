import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const categories = [
  "footwear","outdoor","accessories","apparel","beauty","books","electronics","floral","footwear","furniture","groceries","homedecor","tools","instruments","jewelry","seasonal","housewares","foodservice",
];

const SignUpForm = () => {
  const [userType, setUserType] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const [userData, setUserData] = useState({
    name: '',
    age: '',
    sel: '',
    
  })
//   let name, value;

//   const userRegistration = {
//     username: '',
//     userage: '',
//     selectdrop: '',
//     checkboxes: []
//   }
//   userRegistration.username(...userData.name)
//   console.log(userRegistration.name);

  const handleInputs = (e) => {
    // console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserData({...userData, [name]:value});
  }

  const [checkedArray, setCheckedArray] = useState([]);
  const handleChangeCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    // console.log(value, checked);
    if(checked)
    {
        setCheckedArray([
            ...checkedArray, value
        ])
    }
    else{
        setCheckedArray(checkedArray.filter( (e) => (e !== value) ));
    }
    console.log(checkedArray);
}

  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {...userData}
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    // setUserRegistration({name: "", email: "", school: ""});

    //Post Request
    // Axios.post(url, {
    //     name: userData.name,
    //     age: userData.age,

    // })
    // .then(res => {
    //     console.log(res.data)
    // })
  }

  useEffect(() => {
    // setUserType("NewUsers");
  fetch(`http://localhost:3002/api/getNewUsers`)
  .then(response => response.json())
        .then(data =>  {
          setUsers(data)});
  }, []);

//   const handleChange = (event) => {
//     localStorage.clear();
//     setUserType(event.target.value);
//     fetch(`http://localhost:3002/api/${event.target.value}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   };

// const [selects,setSelects] =useState();
  return (
    <>
      <h2> Login For New Users</h2>

      {/* <ExistUserLogin/> */}
      <div>
        <form onSubmit={handleSubmit}>
         <FormControl sx={{ m: 1, minWidth: 300 }} >
          <InputLabel id="user">Select User</InputLabel>
          <Select
            labelId="user"
            id="user"
            label="Selected User"
            // onChange={loginUser}
            name='sel'
            value={userData.sel}
            onChange={handleInputs}
            // onChange={e=>setSelects(e.target.value)}
          >
            {users.map((user, index) => (
              <MenuItem value={user} key={user.USER_ID}>
                {user.USER_ID} {user.AGE} {user.GENDER}
              </MenuItem>
            ))}
          </Select>

        </FormControl>

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={userData.name}
          onChange={handleInputs}
          sx={{ m: 1, minWidth: 300 }}
        />
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          name="age"
          value={userData.age}
          onChange={handleInputs}
          sx={{ m: 1, minWidth: 300 }}
        />

        <div>
        <label>Choose Category(Any 3)</label>
        </div>
        
        <div>
          <Grid container xs={12}>
            {categories.map((category, index) => (
              <>
                <Grid xs={2} key={index}>
                  <Checkbox name="checkedArray" value={category} onChange={handleChangeCheck} {...label} />
                  &nbsp;
                  <label>{category}</label>
                  &nbsp;
                </Grid>
              </>
            ))}
          </Grid>
        </div>

        <div>
     
        <Button variant="contained" type="submit">SIGN UP</Button>
        </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
