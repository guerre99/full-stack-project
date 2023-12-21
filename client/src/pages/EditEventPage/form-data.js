import * as yup from 'yup'

const fields = [
  {
    name: 'city',
    label: 'Ciudad',
  },
  {
    name: 'date',
    label: 'Fecha',
  },
  {
    name: 'ubication',
    label: 'Ubicación',
  },
  {
    name: 'googlemaps',
    label: 'googlemaps',
    type: 'GoogleMapsAutoComplete',
  },
]

const schema = yup
  .object({
    city: yup.string().required('Ciudar Obligatoria'),
    ubication: yup.string().typeError('Ubicación Obligatoria').required(),
  })
  .required()

export { fields, schema }
