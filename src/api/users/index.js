const UsersHandler = require('./handler');

module.exports = {
  name: 'user',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const usersHandler = new UsersHandler(service, validator);
    server.route(routes(usersHandler))
  }
}