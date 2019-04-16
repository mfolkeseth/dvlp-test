const convict = require('convict')

const config = convict({
  env: {
    format: ['development', 'production'],
    default: 'development',
    env: 'NODE_ENV'
  }
})

const env = config.get('env')
config.loadFile('./config/config-' + env + '.json')

// Perform validation
config.validate({ allowed: 'strict' })

module.exports = config.getProperties()
