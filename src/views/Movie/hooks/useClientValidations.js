import * as yup from "yup";

export const useClientValidations = () => {

    const clientInput = [
        {
            name: "id",
            label: "Cedula",
            type: "text",
            fullWidth: "span 2",
            autoFocus: true
        },
        {
            name: "email",
            label: "Correo Electronico",
            type: "email",
            fullWidth: "span 2",
        },
        {
            name: "name",
            label: "Nombre",
            type: "text",
        },
        {
            name: "phone",
            label: "Ceular",
            type: "number"
        },
    ]

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('El correo no es valido')
            .min(4, "Almenos 4 caracteres")
            .required('El campo es requerido'),
        name: yup
            .string()
            .min(4, "Almenos 4 caracteres")
            .required('El campo es requerido'),
        phone: yup
            .number()
            .typeError('Debe ser un número')
            .integer('Debe ser un número entero')
            .min(100000, 'El número debe tener al menos 6 dígitos')
            .required('Campo requerido'),
        id: yup
            .number()
            .typeError('Debe ser un número')
            .integer('Debe ser un número entero')
            .min(100000, 'El número debe tener al menos 6 dígitos')
            .required('Campo requerido')
    })
    return {
        clientInput,
        schema
    }
}