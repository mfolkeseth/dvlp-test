import App from '../src/App'
import render from 'preact-render-to-string'
const Hapi = require('hapi')
const Inert = require('inert')

const server = Hapi.server({
  port: 3000
})

const init = async () => {
  await server.register(Inert)

  server.route({
    method: 'get',
    path: '/{param*}',
    handler: {
      directory: {
        path: './',
        redirectToSlash: true,
        listing: true
      }
    }
  })

  server.route({
    method: 'get',
    path: '/',
    handler: (request, reply) => {
      const html = render(App)
      return html
    }
  })

  await server.start()
}

init()
