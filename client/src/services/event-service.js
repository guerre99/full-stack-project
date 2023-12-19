import create from 'services/http-service'
import apiClient from './api-client'

let endpoint = '/events'

const eventService = create(endpoint)

eventService.addParticipant = (id, entity) =>
  apiClient.put(`${endpoint}/${id}/addParticipant`, entity)

export default eventService
