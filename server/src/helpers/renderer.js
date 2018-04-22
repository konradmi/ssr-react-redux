import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'
import serialize from 'serialize-javascript'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'

export default ({path}, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  return `
    <html>
     <head>
       ${helmet.title.toString()}
       ${helmet.meta.toString()}
     </head>
     <body>
       <div id="root">${content}</div>
       <script>
         window.INITIAL_STATE=${serialize(store.getState())}
       </script>
       <script src="bundle.js"></script>
     </body>
    </html>
  `
}
