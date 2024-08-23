import React, { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import './login.css'


function Login() {

    let navigate = useNavigate();

    return (
        <div className='form'>
            <h1 className="text-6xl">AUTHENTICATION FORM!</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email ) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;

                
                }}
                onSubmit={(v, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        navigate("/home");
                    }, 100);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}

                        <br /><br />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}

                        <button type="submit" disabled={isSubmitting} className='submit'>
                            submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Login;