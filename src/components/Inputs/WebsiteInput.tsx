import React from 'react';
import {ErrorMessage, Field} from "formik";

const WebsiteInput = () => {
    return (
        <div>
            <p>Website:</p>
            <Field type="text" name="website"/>
            <ErrorMessage name="website" component="div"/>
        </div>
    );
};

export default WebsiteInput;