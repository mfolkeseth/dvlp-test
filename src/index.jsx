import { render } from 'preact'
import App from './App.jsx'

const markup = (
  <div>
    <p>Rendered client side</p>
    <App />
  </div>
)

render(markup, document.getElementById('app'), document.getElementById('ssr'))
