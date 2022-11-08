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
            <form noValidate className={validated} onSubmit={handleSubmit}>
                <div className="input-group-sm col-12">
                    <label for="validationCustom01" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="validationCustom01" placeholder="Correo" required />
                    <div className="invalid-feedback">
                        Ingrese Correo
                    </div>
                </div>
                <div className="input-group-sm col-12">
                    <label for="validationCustom02" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="validationCustom02" placeholder="Contraseña" required />
                    <div className="invalid-feedback">
                        Ingrese Contraseña
                    </div>
                </div>
                <div className="input-group-sm col-12 p-1">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="input-group-md col-12">
                    <button className="" type="submit">Ingresar</button>
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