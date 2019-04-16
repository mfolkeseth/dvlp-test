const Hapi = require('hapi')
const Inert = require('inert')
const config = require('../config')
import vhtml from 'vhtml'
import htm from 'htm'
import App from '../src/App'

const html = htm.bind(vhtml)

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
    handler: (request, h) => {
      return html`
      <html>
        <head>
          <title>dvlp</title>
        </head>
      <body>
        <div id="app">
          <div id="ssr">
            <p>Rendered server side</p>
            <${App} html=${html} />
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
