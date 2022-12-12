import * as yup from 'yup'

export const techRegisterSchema = yup.object().shape({
    title: yup
        .string()
        .required('Este campo é obrigatório!')
        .min(3)
        .max(20),
    status: yup
        .string()
        .required('Escolha uma opção!')
})