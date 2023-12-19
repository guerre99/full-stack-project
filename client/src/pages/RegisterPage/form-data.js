import * as yup from 'yup'

const fields = [
  {
    name: 'username',
    label: 'Username',
  },
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'invitedBy',
    label: 'Invited By',
  },
  {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
  },
]

const schema = yup
  .object({
    username: yup.string().required('Nombre de usuario obligatorio'),
    email: yup.string().required('Email obligatorio'),
    invitedBy: yup.string().required('Invitación obligatoria'),
    password: yup.string().required('Contraseña obligatoria'),
  })
  .required()

export { fields, schema }
