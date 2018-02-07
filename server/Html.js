import React from 'react'

const Html = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
        <div id="root">{props.children}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  )
}

export default Html
