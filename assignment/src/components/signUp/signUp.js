import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const passwordRegex = /\w\W{8,16}/ ;
function SignUp() {
  const [user, setUser] = useState({
    email: "",
    Name: "",
    userName: "",
    password: "",
    confirmPassword:""
  });
///////////////////////////////////////////////////////////////////////
  const [errors,setErrors] = useState({
    NameErr:"",
    userNameErr:"",
    emailErr:"",
    passwordErr:"",
    confirmPasswordErr:""
  })
///////////////////////////////////////////////////////////////////////
const handleChange=(evt)=>{
  if(evt.target.name==="Name"){
    setUser({...user,Name:evt.target.value});
    setErrors({...errors,NameErr:(evt.target.value.length===0)?"Name is required":""})
    
  }else if(evt.target.name==="userName"){
    setUser({...user,userName:evt.target.value});
    setErrors({...errors,userNameErr:(evt.target.value.length===0)?"User name is required":""})
    
  }else if(evt.target.name==="email"){
    setUser({...user,email:evt.target.value});
    setErrors({...errors,emailErr:(evt.target.value.length===0)?"Email is required":""});
    
  }else if(evt.target.name==="password"){
    setUser({...user,password:evt.target.value});
    setErrors({...errors,passwordErr:(evt.target.value.length===0)?"password is required":
    (passwordRegex.test(evt.target.value))?"":"Password must contain Capital,small,special characters and numbers"})
    
  }else if(evt.target.name ==="confirmPassword"){
    setUser({...user,confirmPassword:evt.target.value});
    setErrors({...errors,confirmPasswordErr:(evt.target.value!==user.password)?"Wrong password":""})
  }
};
///////////////////////////////////////////////////////////////////////
const handleSubmit=(evt)=>{
  evt.preventDefault();
}
///////////////////////////////////////////////////////////////////////
return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Form onSubmit={()=>{handleSubmit()}}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className={`${(errors.NameErr !=="")?"border-danger":""}`}
            type="text"
            placeholder="Enter your name"
            required
            value={user.Name}
            name="Name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.NameErr}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            className={`${(errors.userNameErr !=="")?"border-danger":""}`}
            placeholder="Enter your user name"
            required
            value={user.userName}
            name="userName"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.userNameErr}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className={`${(errors.emailErr !=="")?"border-danger":""}`}
            placeholder="Enter your email"
            required
            value={user.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.emailErr}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className={`${(errors.passwordErr !=="")?"border-danger":""}`}
            placeholder="Password"
            required
            value={user.password}
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.passwordErr}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            className={`${(errors.confirmPasswordErr !=="")?"border-danger":""}`}
            placeholder="Confirm Password"
            required
            onChange={(e) => {
              handleChange(e);
            }}
            value={user.confirmPassword}
            name="confirmPassword"
          />
          <p className="text-danger">{errors.confirmPasswordErr}</p>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Stack>
  );
}

export default SignUp;
