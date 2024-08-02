import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ContactUs() {
  const enteredEmail = useRef();
  const enteredName = useRef();

  const submitInfo = (event) => {
    event.preventDefault();
    const email = enteredEmail.current.value;
    const name = enteredName.current.value;
    console.log('Email:', email);
    console.log('Name:', name);
  };

  return (
    <Form onSubmit={submitInfo}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={enteredEmail}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          ref={enteredName}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
