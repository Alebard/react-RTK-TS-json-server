import React from 'react';
import axios from "axios";
import {useAppDispatch} from "../../hooks/redux";
import {fetchUsers} from "../../store/actionCreators";
import {Formik, Form} from 'formik';
import EmailInput from "../Inputs/EmailInput";
import City from "../Inputs/City";
import NameInput from "../Inputs/NameInput";
import WebsiteInput from "../Inputs/WebsiteInput";
import UsernameInput from "../Inputs/UsernameInput";
import {validateEmail} from "../../helpers/validate";
import {AppDispatch} from "../../store/store";
import classes from "./form.module.css"


function submitHandler(dispatch: AppDispatch, values: FormValues, actions: React.SetStateAction<any>) {
    actions.setSubmitting(true)
    axios.post('http://localhost:3001/users', values).then(function (response) {
        dispatch(fetchUsers())
        actions.setSubmitting(false)

    })
}

export interface FormValues {
    email: string;
    city: string;
    website: string;
    name: string;
    username: string;
}


const MyForm = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={classes.popup}>
            <Formik
                initialValues={{email: '', city: '', name: '', website: '', username: ''}}
                onSubmit={(values, actions) => {
                    submitHandler(dispatch, values, actions)
                }}
                validate={(values) => validateEmail(values)}

            >
                {({isSubmitting}) => (
                    <Form>
                        <NameInput/>
                        <UsernameInput/>
                        <EmailInput/>
                        <City/>
                        <WebsiteInput/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MyForm;