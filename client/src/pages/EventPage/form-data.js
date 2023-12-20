import * as yup from 'yup'

const getFields = (vehiculos) => [
  {
    name: 'participants',
    label: 'Participante',
    type: 'select',
    placeholder: 'Selecciona aqui tu coche',
    options: vehiculos.map((vehiculo) => ({
      label: vehiculo.model,
      value: vehiculo._id,
    })),
  },
]

const schema = yup
  .object({
    participant: yup.string().required('Participante obligatorio'),
  })
  .required()

export { getFields, schema }
