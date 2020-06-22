import React from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validations = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
    hasAgreed: yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
})

const SignUpform = () => (
    <Formik initialValues={{
        name: "",
        email: "",
        password: "",
        hasAgreed: false
    }}
        onSubmit={(values) => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        }}
        validationSchema={validations}>

        <div className="FormCenter">
            <Form className="FormFields">

                <div className="FormField">
                    <label className="FormField_Label" htmlFor="name">Full Name</label>
                    <Field type="text" 
                    id="name" 
                    className="FormField_Input" 
                    placeholder="Enter your full name" 
                    name="name" />
                    <ErrorMessage className="FormField_ErrorMessage" component="span" name="name" />
                </div>

                <div className="FormField">
                    <label className="FormField_Label" htmlFor="email">E-mail Address</label>
                    <Field type="email"
                        id="email"
                        className="FormField_Input"
                        placeholder="Enter your email"
                        name="email" />
                        <ErrorMessage className="FormField_ErrorMessage" component="span" name="email" />
                </div>

                <div className="FormField">
                    <label className="FormField_Label" htmlFor="password">Password</label>
                    <Field type="password" 
                    id="password" 
                    className="FormField_Input" 
                    placeholder="Enter your password" 
                    name="password" />
                    <ErrorMessage className="FormField_ErrorMessage" component="span" name="password" />
                </div>

                <div className="FormField">
                    <label className="FormField_CheckboxLabel">
                        <Field
                            className="FormField_Checkbox"
                            id="hasAgreed"
                            type="checkbox"
                            name="hasAgreed" />I agree all statements in <a href=" " className="FormField_TermsLink">terms of service</a>
                    </label>
                    <ErrorMessage className="FormField_ErrorMessage" component="span" name="hasAgreed" />
                </div>

                <div className="FormField">
                    <button type="submit" className="FormField_Button mr-20">Sign Up</button>
                    <Link to="/sign-in" className="FormField_Link">I'm already a member</Link>
                </div>
            </Form>
        </div>
    </Formik>
)

export default SignUpform;