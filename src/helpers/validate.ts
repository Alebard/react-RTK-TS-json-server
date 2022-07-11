import {FormikErrors} from "formik";
import {FormValues} from "../components/Form/Form";


export function validateEmail(values: any): any {
    var errors: FormikErrors<FormValues> = {};
    if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (values.city.length < 3) {
        errors.city = 'Invalid city.'
    }
    if (values.name.trim().length < 3) {
        errors.name = 'Invalid name.'
    }
    if (values.username.trim().length < 3) {
        errors.username = 'Invalid username.'
    }

    var pattern = new RegExp(
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    if (!pattern.test(values.website)) {
        errors.website = 'Invalid website.'
    }

    return errors;
}