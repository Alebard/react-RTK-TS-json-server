import React from 'react';
import {ErrorMessage, Field} from "formik";

const NameInput = () => {
    return (
        <div>
            <p>Name:</p>
            <Field type="text" name="name"/>
            <ErrorMessage name="name" component="div"/>
        </div>
    );
};

export default NameInput;