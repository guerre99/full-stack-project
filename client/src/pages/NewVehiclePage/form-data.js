import * as yup from 'yup'

const fields = [
  {
    name: 'model',
    label: 'Modelo',
  },
  {
    name: 'year',
    label: 'Año',
    type: 'number',
  },
  {
    name: 'engine.type',
    label: 'Tipo',
  },
  {
    name: 'engine.power',
    label: 'Potencia',
  },
  {
    name: 'image',
    label: 'Imagen  ',
  },
]

const schema = yup
  .object({
    model: yup.string().required('Modelo obligatorio'),
    year: yup.number().required('Año obligatorio'),
    engine: yup
      .object({
        type: yup.string().required('Tipo obligatorio'),
        power: yup.string().required('Potencia obligatoria'),
      })
      .required('palomas'),
  })
  .required()

export { fields, schema }
