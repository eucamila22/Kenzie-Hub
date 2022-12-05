import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Este campo é obrigatório!'),
    password: yup
        .string()
        .required('Este campo é obrigatório!')
})