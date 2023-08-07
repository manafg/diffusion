import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    origin: yup.string().required('Origin is required'),
    description: yup.string().required('Descrption is required'),
    difficulty: yup.string().required('Difficulty is required'),
    protien: yup.string().required('Protien is required'),
    produce: yup.string().required('Produce is required'),
    spice: yup.string().required('Spice is required'),
    oil: yup.string().required('Cooking Oil is required'),
    vloume: yup.number().required('Vloume is required'),
    serves: yup.number ().required('Serves is required'),
    stock: yup.string().required('Stock is required'),
    authenticity: yup.string().required('authenticity is required'),
});

export {schema};


