import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ToDo() {
  const [user, setUser] = useState({
    do: "",
  });
  ////////////////////////////////////////////////////////////////
  const handleChange = (evt) => {
      if(evt.target.name ==="inputDo"){
        setUser({...user,do:evt.target.value});
      }
    console.log(user.do);
  };
  ////////////////////////////////////////////////////////////////
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  ////////////////////////////////////////////////////////////////

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter what you want to do</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter what you want to do"
            name="inputDo"
            value={user.do}
            onChange={(e) => {
                handleChange(e);
              }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </Stack>
  );
}
