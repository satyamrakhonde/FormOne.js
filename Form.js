import React, { useState } from "react";

const Form = () => {
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    school: "",
    // checkboxes: [],
  });
//   let name, value;

  const [records, setRecords] = useState([]);

  const handleInputs = (e) => {
    // console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
    // console.log(userRegistration);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {...userRegistration}
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    // setUserRegistration({name: "", email: "", school: ""});
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" id="name" value={userRegistration.name} onChange={handleInputs}></input>

        <label>Email</label>
        <input type="text" name="email" id="email" value={userRegistration.email} onChange={handleInputs}></input>

        <label>School</label>
        <input type="text" name="school" id="school" value={userRegistration.school} onChange={handleInputs}></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
