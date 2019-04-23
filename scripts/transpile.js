const fs = require('fs')
const sucrase = require('sucrase')

const RE_JS = /\.jsx?$/

module.exports = async function transpile (filePath, isServer) {
  const jsTransforms = isServer ? ['imports', 'jsx'] : ['jsx']
  console.log('match file?', RE_JS.test(filePath))
  if (RE_JS.test(filePath)) {
    return sucrase.transform(fs.readFileSync(filePath, 'utf8'), {
      transforms: jsTransforms
    }).code
  }
}
