import React from 'react';
import {ErrorMessage, Field} from "formik";

const City = () => {
    return (
        <div>
            <p>City:</p>
            <Field type="text" name="city"/>
            <ErrorMessage name="city" component="div"/>
        </div>
    );
};

export default City;