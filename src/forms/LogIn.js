import React, { useState } from 'react'


function LogIn() {
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
            <h4>Log-In</h4>
            <form noValidate class={validated} onSubmit={handleSubmit}>
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
                    <button class="login_Register button btn btn-primary" type="submit">Ingresar</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn
/*
<Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h4 className='text-capitalize font-weight-bold'>Log-in</h4>
                <Form.Group as={Col} sm="4" md="4" controlId="CustomFG1">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control className='my-1' type="email" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">Ingresar un correo</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="4" md="4" controlId="CustomFG2">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control className='my-1' type="password" placeholder="Contraseña" required />
                    <Form.Control.Feedback type="invalid">Ingrese una contraseña</Form.Control.Feedback>
                </Form.Group>
                <Button block variant="primary" type='submit'>
                    Log-In
                </Button>
            </Form>*/