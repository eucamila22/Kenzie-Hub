import * as yup from 'yup'


export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required('Este campo é obrigatório!')
        .min(5)
        .max(200),
    email: yup
        .string()
        .required('E-mail inválido!'),
    password: yup
        .string()
        .required('Este campo é obrigatório!')
        .min(8,'É necessário ter ao menos 8 caracteres!')
        .matches(/(?=.*[A-Z])/, 'É necessário ao menos uma letra maiúscula!')
        .matches(/(?=.*[a-z])/, 'É necessário ao menos uma letra minúscula!')
        .matches(/(?=.*[@#$%^&+=])/, 'É necessário ao menos um caractere especial!'),
    passwordConfirm: yup
        .string()
        .required('Este campo é obrigatório!')
        .oneOf([yup.ref('password'), null],'A senha não confere'),
    bio: yup
        .string()
        .required('Este campo é obrigatório!')
        .max(200, 'Você excedeu o limite!'),
    contact: yup
        .string()
        .required('Este campo é obrigatório!'),
    course_module: yup
        .string()
        .required('Escolha uma opção!')
})