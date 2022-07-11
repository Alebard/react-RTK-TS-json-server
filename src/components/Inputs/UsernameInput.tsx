import React from 'react';
import {ErrorMessage, Field} from "formik";

const UsernameInput = () => {
    return (
        <div>
            <p>Username:</p>
            <Field type="text" name="username"/>
            <ErrorMessage name="username" component="div"/>
        </div>
    );
};

export default UsernameInput;