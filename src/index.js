import { html, render } from 'htm/preact'
import App from './App.js'

const markup = html`
  <div>
    <p>Rendered client side</p>
    <${App} html=${html}/>
  </div>
`

render(markup, document.getElementById('app'), document.getElementById('ssr'))
