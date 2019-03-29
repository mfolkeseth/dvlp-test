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
    handler: (request, h) => {
      return `
      <html>
        <head>
          <link rel="preload" crossorigin="anonymous" as="script" href="/src/index.js" />
        </head>
      <body>
        <p>Hello world</p>
        <div id="app"></div>
        <script type="module" src="/src/index.js"></script>
      </body>
      </html>
    `
    }
  })



  await server.start()
}

init()
