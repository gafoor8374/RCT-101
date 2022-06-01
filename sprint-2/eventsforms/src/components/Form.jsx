import React, { useState, useEffect } from "react";

export const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    isIndian: false,
  });

  const handleChange = (e) => {
    //   console.log(e.target)
    let { checked, type, name, value, files } = e.target;
    console.log(checked, type, name, value);
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data",form)
  };

  return (
    <div>
      Form
      <div style={{ border: "1px solid red" }} onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter Name"
            name="username"
            value={form.name}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Enter Email"
            name="email"
            value={form.email}
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={form.password}
          />
        </div>
        <div>
          <label>Age :</label>
          <input
            onChange={handleChange}
            type="number"
            placeholder="Enter Age"
            name="age"
            value={form.age}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            checked={form.isIndian}
            name="isIndian"
          />
          <label>:isIndian</label>
        </div>
        <div>
          <label> Male</label>
          <input
            onChange={handleChange}
            name="gender"
            type="radio"
            value="male"
          />
          <label> Female</label>
          <input
            onChange={handleChange}
            name="gender"
            type="radio"
            value="female"
          />
        </div>
        <div>
          <label>User Resume :</label>
          <input
            onChange={handleChange}
            type="file"
            accept="image/png,image/jpeg ,application/pdf"
            name="resume"
            files={form.resume}
          />
        </div>
        <div>
          <label>Gender :</label>
          <select
            name="selectGender"
            value={form.selectGender}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>city :</label>
          <select
            name="selectcity"
            value={form.selectcity}
            onChange={handleChange}
          >
            <option value="Delhi">Delhi</option>
            <option value="Banglore">Banglore</option>
            <option value="pune">pune</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
};
