import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("name is required")
        .min(3, "username must be 3 chars long"),
    email: yup
        .string()
        .email("Must be valid email address")
        .required("Must include email address"),
    password: yup
        .string()
        .required("password is required")
        .min(3, "password must be 3 chars long"),
    terms: yup.boolean(),
});