# Dev env with no transpiling
[Testing dvlp](https://www.npmjs.com/package/dvlp) by [@popeindustries](https://twitter.com/popeindustries)

## Why does it work?
For how `dvlp` works, refer to @popeindustries doc, mentioned above.

We use [preact](https://github.com/developit/preact) and not react, because preact provides [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) support.

We use [htm](https://github.com/developit/preact) because we want to minimise transpilation while
offering maximum readability (and because we :heart: ESM).

## You wanna check it out?

    $ npm i
    $ npm run dev

Open browser on: [http://localhost:3000](http://localhost:3000)
