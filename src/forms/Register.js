import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
/*
const auth = getAuth();
const CUWEP = createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });*/



function Register() {
  const [validated, setValidated] = useState("needs-validation")
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated("was-validated")
  }


  return (
    <div className='p-1'>
      <h4>Registro</h4>
      <form noValidate class={validated} onSubmit={handleSubmit}>
        <div class="input-group-sm col-12">
          <label for="validationCustom001" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="validationCustom001" placeholder="Nombre" required />
          <div class="invalid-feedback">
            Ingrese Nombre
          </div>
        </div>
        <div class="input-group-sm col-12">
          <label for="validationCustom01" class="form-label">Correo</label>
          <input type="email" class="form-control" id="validationCustom01" placeholder="Correo" required />
          <div class="invalid-feedback">
            Ingrese Correo
          </div>
        </div>
        <div class="input-group-sm col-12">
          <label for="validationCustom02" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="validationCustom02" placeholder="Contraseña" required />
          <div class="invalid-feedback">
            Ingrese Contraseña
          </div>
        </div>
        <div class="input-group-sm col-12 p-1">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="input-group-md col-12">
          <button class="login_Register button btn btn-primary" type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  )
}

export default Register

/*<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
          <h4 className='text-capitalize font-weight-bold'>Registro</h4>
          <Form.Group as={Col} md="4" controlId="CustomFG3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control className='my-1' type="text" placeholder="Nombre" required />
            <Form.Control.Feedback type="invalid">Ingresar un Nombre</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="CustomFG4">
            <Form.Label>Correo</Form.Label>
            <Form.Control className='my-1' type="email" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">Ingresar un correo</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="CustomFG5">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control className='my-1' type="password" placeholder="Contraseña" required />
            <Form.Control.Feedback type="invalid">Ingrese una contraseña</Form.Control.Feedback>
          </Form.Group>
          <Button block variant="primary" type='submit'>
            Registrarse
          </Button>
        </Form>*/
