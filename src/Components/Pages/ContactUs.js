import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = async(e) => {
    e.preventDefault();
    const myObj = {
      Name: name,
      Email: email,
      Phone: phone,
    };

    try{
        const response = await axios.post("https://myfirst-user-details-default-rtdb.firebaseio.com/contact_us.json",myObj,{headers:{"Content-Type":"application/json",},})
        console.log(response.data);
    }
    catch(error){
        console.log("There was an error submitting form!",error);
    }
    setEmail('');
    setName('');
    setPhone('');
  };

  const nameHandler = (e) =>{
    setName(e.target.value);
  }
  const phoneHandler = (e) =>{
    setPhone(e.target.value);
  }
  const emailHandler = (e) =>{
    setEmail(e.target.value);
  }

  return (
    <Form className="mt-5" onSubmit={submitHandler}>
      <Form.Group controlId="formBasicName" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type=""
          placeholder="Name"
          value={name}
          onChange={nameHandler}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={emailHandler}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPhone" className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your Phone number"
          value={phone}
          onChange={phoneHandler}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
