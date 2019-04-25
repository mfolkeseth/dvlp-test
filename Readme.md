# Dev env with no transpiling
[Testing dvlp](https://www.npmjs.com/package/dvlp) by [@popeindustries](https://twitter.com/popeindustries)

## Why does it work?
For how `dvlp` works, refer to @popeindustries doc, mentioned above.

We use [preact](https://github.com/developit/preact) and not react, because preact provides [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) support.

## Why is it so awesome?
You will have a super fast development environment with only minimal transpilation needed (for unknown browser languages). It has seamless server side render with reusable components and js modules injected right into the browser.

## You wanna check it out?

    $ npm i
    $ npm run dev

Open browser on: [http://localhost:3000](http://localhost:3000)
