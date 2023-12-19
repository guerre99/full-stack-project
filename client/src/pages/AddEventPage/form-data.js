import * as yup from 'yup'

const fields = [
  {
    name: 'city',
    label: 'Ciudad',
  },
  {
    name: 'date',
    type: 'date',
  },
  {
    name: 'ubication',
    label: 'Ubicación',
  },
]

const schema = yup
  .object({
    name: yup.string().required('Nombre Obligatorio'),
    latitude: yup.number().typeError('Latitud Obligatoria').required(),
    longitude: yup.number().typeError('Longitud Obligatoria').required(),
  })
  .required()

export { fields, schema }
