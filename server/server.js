import App from '../src/App.jsx'
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
      return `
        <html>
        <head>
          <title>Testing dvlp</title>
        </head>
        <body>
          <div id="app">
            <div id="ssr">
              ${render(App())}
            </div>
          </div>
          <script type="module" src="/src/index.js"></script>
        </body>
        </html>
      `
    }
  })

  await server.start()
}

init()
