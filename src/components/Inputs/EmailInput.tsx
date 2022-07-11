import React from 'react';
import {ErrorMessage, Field} from "formik";

const EmailInput = () => {
    return (
        <div>
            <p>Email:</p>
            <Field type="email" name="email"/>
            <ErrorMessage name="email" component="div"/>
        </div>
    );
};

export default EmailInput;