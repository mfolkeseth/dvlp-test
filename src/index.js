import { render, h } from 'preact' //eslint-disable-line
// import App from './App.js'

const markup = (
  <div>
    <p>Rendered client side</p>
  </div>
)

render(markup, document.getElementById('app'), document.getElementById('ssr'))
