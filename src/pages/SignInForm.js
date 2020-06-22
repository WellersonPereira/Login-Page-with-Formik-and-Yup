import React from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { ErrorMessage, Formik, Form, Field } from 'formik';

const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required()
})

const SignInForm = () => (
    <Formik initialValues={{
        email: "",
        password: ""
    }}
        onSubmit={(values) => {
            console.log(values);
        }}
        validationSchema={validations}>
        <div className="FormCenter">
            <Form className="FormFields">
                <div className="FormField">
                    <label htmlFor="email" className="FormField_Label">e-mail Address</label>
                    <Field type="email"
                        name="email"
                        className="FormField_Input"
                        placeholder="Enter your email" />
                    <ErrorMessage className="FormField_ErrorMessage" component="span" name="email" />
                </div>
                <div className="FormField">
                    <label htmlFor="password" className="FormField_Label">password</label>
                    <Field type="password"
                        name="password"
                        className="FormField_Input"
                        placeholder="Enter your password" />
                    <ErrorMessage className="FormField_ErrorMessage" component="span" name="password" />
                </div>
                <div className="FormField">
                    <button type="submit"
                        className="FormField_Button mr-20"
                    >Sign in
                        </button>
                    <Link to="/" className="FormField_Link">Create an account</Link>
                </div>
            </Form>
        </div>
    </Formik>
)

export default SignInForm;