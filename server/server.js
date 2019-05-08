import App from './templates/js/index.js'
const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Handlebars = require('handlebars')

const server = Hapi.server({
  port: 3000
})

const init = async () => {
  await server.register(Inert)
  await server.register(Vision)
  server.views({
    engines: {
      hbs: Handlebars
    },
    relativeTo: __dirname,
    path: './templates'
  })

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
      return reply.view('index', {
        js: App
      })
    }
  })

  await server.start()
}

init()
