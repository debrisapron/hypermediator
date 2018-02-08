import express from 'express'
import routes from './routes'

function main() {
  let app = express()
  app.use(express.static('./public', { index: false }))
  app.use(routes)
  app.listen(1337, () => {
    console.log('Hypermediator web server listening on port 1337')
  })
}

// Make it happen
main()
