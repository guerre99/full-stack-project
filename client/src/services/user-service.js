import create from 'services/http-service'

let endpoint = '/users'

const userService = create(endpoint)

export default userService
