import React from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {FormGroup, FormControl, Button} from "react-bootstrap";

const PetForm = (props) => {

    const vaildationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        species: Yup.string().required("Required"),
        breed: Yup.string().required("Required"),
        age: Yup.string().required("Required"),
        location: Yup.string().required("Required"),
    });
    console.log(props);

    return (
        <div className="form-wrapper">
            <Formik {...props} vaildationSchema={vaildationSchema}>
                <Form>
                    <FormGroup>
                        <Field name="name" type="text" className="form-control"/>
                        <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <Field name="species" type="text" className="form-control"/>
                        <ErrorMessage name="species" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <Field name="breed" type="text" className="form-control"/>
                        <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <Field name="age" type="text" className="form-control"/>
                        <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <Field name="location" type="text" className="form-control"/>
                        <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <Button variant="danger" size="lg" block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default PetForm;