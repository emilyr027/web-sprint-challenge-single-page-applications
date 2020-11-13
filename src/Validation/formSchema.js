import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    email: yup
        .string()
        .required('Email is required'),
    size: yup
        .string()
        .oneOf(['mini', 'small', 'medium', 'large' ])
        .required('Please choose size of pizza'),
    specialInstructions: yup
        .string()
        .notRequired(),
})

export default schema